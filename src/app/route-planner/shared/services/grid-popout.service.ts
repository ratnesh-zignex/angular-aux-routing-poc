import { Injectable, NgZone, OnDestroy } from '@angular/core';
import { Subject, Observable, BehaviorSubject, filter, map, take } from 'rxjs';
import { MapGridState, NavigationService } from './navigation.service';
import { IZDailyCustomerDataType } from '../interfaces/interfaces';

export type BridgeAction =
  | 'GET_WEEKLY_STATS'
  | 'UPDATE_COLORS'
  | 'SYNC_STATE'
  | 'gridDataUpdated'
  | 'putGridBack'
  | 'initializeGridData'
  | 'windowClosing'
  | string;

export interface BridgeMessage {
  id?: string; // UUID for request/response correlation
  type: 'REQUEST' | 'RESPONSE' | 'EVENT';
  action: BridgeAction;
  payload?: any;
  error?: any;
}

export interface popoutData {
  points: IZDailyCustomerDataType[];
  state: MapGridState;
}

export interface PopoutState {
  plannerType: string;
  selectedOpsUnit: string;
  selectedRouteType: string;
  colors: any[];
}

@Injectable({
  providedIn: 'root',
})
export class GridPopoutService implements OnDestroy {
  private channelName = 'grid-popout-channel';
  private broadcastChannel: BroadcastChannel | null = null;
  // Subjects for messages received from the pop-out window
  private _gridDataUpdated = new Subject<popoutData>();
  gridDataUpdated$: Observable<popoutData> =
    this._gridDataUpdated.asObservable();
  private _putGridBack = new Subject<{
    points?: IZDailyCustomerDataType[];
    plannerType?: string;
    dayOfWeek?: string;
    routes?: string[];
  }>();
  putGridBack$: Observable<{
    points?: IZDailyCustomerDataType[];
    plannerType?: string;
    dayOfWeek?: string;
    routes?: string[];
  }> = this._putGridBack.asObservable();
  // State management for the pop-out window
  private _gridPopoutWindow: Window | null = null;

  private _initializeGridData = new Subject<IZDailyCustomerDataType[]>();
  initializeGridData$: Observable<IZDailyCustomerDataType[]> =
    this._initializeGridData.asObservable();
  // State management
  private _isGridPoppedOut = new BehaviorSubject<boolean>(false);
  isGridPoppedOut$ = this._isGridPoppedOut.asObservable();
  popoutGridData: IZDailyCustomerDataType[] = [];

  // Intra-window communication for Edit All (Popup -> Planner in same window)
  private _editAllTrigger = new Subject<any>();
  editAllTrigger$ = this._editAllTrigger.asObservable();

  // Bridge State (Synced from Main Window)
  public popoutState: PopoutState = {
    plannerType: 'Daily',
    selectedOpsUnit: '',
    selectedRouteType: '',
    colors: [],
  };

  // Subject to listen to all bridge messages
  private _bridgeMessages = new Subject<BridgeMessage>();
  bridgeMessages$ = this._bridgeMessages.asObservable();

  constructor(private ngZone: NgZone, private navService: NavigationService) {
    this.initializeBroadcastChannel();
    // Listen for main window unload to close popout
    if (typeof window !== 'undefined') {
      window.addEventListener('beforeunload', () => {
        if (this._gridPopoutWindow && !this._gridPopoutWindow.closed) {
          this._gridPopoutWindow.close();
        }
      });
    }
  }
  private initializeBroadcastChannel(): void {
    if (!this.broadcastChannel) {
      this.broadcastChannel = new BroadcastChannel(this.channelName);
      this.broadcastChannel.onmessage = (event: MessageEvent) => {
        this.ngZone.run(() => {
          // Ensure Angular change detection runs
          const message: BridgeMessage = event.data;
          console.log(
            'GridPopoutService: Received message:',
            message
          );
          
          // Emit to general bridge listener
          this._bridgeMessages.next(message);

          // Handle specific events for backward compatibility and core logic
          if (message.type === 'EVENT' || !message.type) { // Handle legacy messages without 'type' if any
             this.handleEventMessage(message);
          }
        });
      };
      this.broadcastChannel.onmessageerror = (error) => {
        console.error(
          'GridPopoutService: BroadcastChannel message error:',
          error
        );
      };
    }
  }

  private handleEventMessage(message: BridgeMessage) {
      switch (message.action) {
        case 'gridDataUpdated':
          if (message.payload?.points)
            this._gridDataUpdated.next(message.payload);
          break;
        case 'putGridBack':
          const putBackData = {
            plannerType: message.payload?.plannerType,
            dayOfWeek: message.payload?.dayOfWeek,
            routes: message.payload?.routes,
          };
          this._putGridBack.next(putBackData);
          this.setGridPoppedOut(false);
          break;
        case 'initializeGridData':
          if (message.payload) {
            console.log('GridPopoutService: Broadcasting init data to popout planner:', message.payload.points);
            this._initializeGridData.next(message.payload.points);
            
            // Sync State
            if (message.payload.popoutState) {
                this.popoutState = message.payload.popoutState;
                console.log('GridPopoutService: State Synced:', this.popoutState);
            }

            // Also update the navigation service for other components
            this.navService.getLoadedData(
              true,
              false,
              message.payload.state,
            );
          }
          break;

        case 'windowClosing':
          this.setGridPoppedOut(false);
          break;
        
        case 'UPDATE_COLORS':
            if (message.payload) {
                this.popoutState.colors = message.payload;
                console.log('GridPopoutService: Colors updated:', this.popoutState.colors);
            }
            break;

        case 'SYNC_STATE':
             if (message.payload) {
                 this.popoutState = { ...this.popoutState, ...message.payload };
                 console.log('GridPopoutService: State updated:', this.popoutState);
             }
             break;

        default:
          // console.warn('GridPopoutService: Unknown message action:', message.action);
      }
  }

  // Method to send messages to the pop-out window
  sendMessage(message: BridgeMessage): void {
    if (this.broadcastChannel) {
      console.log('GridPopoutService: Sending message:', message);
      this.broadcastChannel.postMessage(message);
    } else {
      console.warn(
        'GridPopoutService: BroadcastChannel not initialized. Cannot send message.'
      );
    }
  }

  // --- RPC Bridge Methods ---

  /**
   * Sends a request to the other window and waits for a response.
   * Usage (Popout): this.service.sendRequest('GET_WEEKLY_STATS', params).subscribe(data => ...)
   */
  sendRequest<T>(action: BridgeAction, payload?: any): Observable<T> {
    const id = this.generateId();
    const message: BridgeMessage = {
      id,
      type: 'REQUEST',
      action,
      payload
    };

    this.sendMessage(message);

    return this.bridgeMessages$.pipe(
      filter(msg => msg.type === 'RESPONSE' && msg.id === id),
      take(1),
      map(msg => {
        if (msg.error) {
          throw msg.error;
        }
        return msg.payload;
      })
    );
  }

  /**
   * Sends a response to a specific request.
   * Usage (Main): this.service.sendResponse(requestId, data);
   */
  sendResponse(requestId: string, payload: any, error?: any): void {
    const message: BridgeMessage = {
      id: requestId,
      type: 'RESPONSE',
      action: 'RESPONSE', // Generic action for response
      payload,
      error
    };
    this.sendMessage(message);
  }

  /**
   * Broadcasts an event to the other window.
   * Usage (Main): this.service.broadcastEvent('UPDATE_COLORS', colors);
   */
  broadcastEvent(action: BridgeAction, payload?: any): void {
      const message: BridgeMessage = {
          type: 'EVENT',
          action,
          payload
      };
      this.sendMessage(message);
  }

  /**
   * Listens for incoming requests of a specific action.
   * Usage (Main): this.service.listenForRequest('GET_WEEKLY_STATS').subscribe(msg => ...)
   */
  listenForRequest(action: BridgeAction): Observable<BridgeMessage> {
      return this.bridgeMessages$.pipe(
          filter(msg => msg.type === 'REQUEST' && msg.action === action)
      );
  }

  /**
   * Listens for incoming events of a specific action.
   * Usage (Popout): this.service.listenForEvent('UPDATE_COLORS').subscribe(msg => ...)
   */
  listenForEvent(action: BridgeAction): Observable<BridgeMessage> {
      return this.bridgeMessages$.pipe(
          filter(msg => msg.type === 'EVENT' && msg.action === action)
      );
  }

  private generateId(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  setGridPopoutWindow(win: Window | null): void {
    this._gridPopoutWindow = win;
    this.setGridPoppedOut(win !== null);

    if (win) {
      // Monitor the window for closure
      const checkClosed = setInterval(() => {
        if (win.closed) {
          clearInterval(checkClosed);
          this.setGridPopoutWindow(null);
          this.sendMessage({ type: 'EVENT', action: 'windowClosing' });
        }
      }, 1000);
    }
  }

  getGridPopoutWindow(): Window | null {
    return this._gridPopoutWindow;
  }
  setGridPoppedOut(isPopped: boolean): void {
    this._isGridPoppedOut.next(isPopped);
  }
  isGridPoppedOut(): boolean {
    return this._isGridPoppedOut.value;
  }
  
  // Trigger Edit All (Local Only)
  triggerEditAll(payload: any): void {
      console.log('GridPopoutService: triggerEditAll called with payload:', payload);
      this._editAllTrigger.next(payload);
  }

  // Clean up BroadcastChannel on service destruction (optional, but good practice)
  ngOnDestroy(): void {
    if (this.broadcastChannel) {
      this.broadcastChannel.close();
      this.broadcastChannel = null;
    }
  }
}
