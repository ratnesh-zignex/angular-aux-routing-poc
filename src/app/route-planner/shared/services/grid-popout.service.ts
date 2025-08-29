import { Injectable, NgZone, OnDestroy } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { MapPoint } from '../interfaces/map-interfaces';
export interface PopoutMessage {
  type: 'gridDataUpdated' | 'putGridBack' | string;
  payload?: any; // Payload is optional for 'putGridBack'
}

@Injectable({
  providedIn: 'root',
})
export class GridPopoutService implements OnDestroy {
  private channelName = 'grid-popout-channel';
  private broadcastChannel: BroadcastChannel | null = null;
  // Subjects for messages received from the pop-out window
  private _gridDataUpdated = new Subject<MapPoint[]>();
  gridDataUpdated$: Observable<MapPoint[]> =
    this._gridDataUpdated.asObservable();
  private _putGridBack = new Subject<{
    points: MapPoint[];
    plannerType?: string;
    dayOfWeek?: string;
    routes?: string[];
  }>();
  putGridBack$: Observable<{
    points: MapPoint[];
    plannerType?: string;
    dayOfWeek?: string;
    routes?: string[];
  }> = this._putGridBack.asObservable();
  // State management for the pop-out window
  private _gridPopoutWindow: Window | null = null;

  private _initializeGridData = new Subject<MapPoint[]>();
  initializeGridData$: Observable<MapPoint[]> =
    this._initializeGridData.asObservable();
  // State management
  private _isGridPoppedOut = new BehaviorSubject<boolean>(false);
  isGridPoppedOut$ = this._isGridPoppedOut.asObservable();
  popoutGridData: MapPoint[] = [];
  constructor(private ngZone: NgZone) {
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
          const message: PopoutMessage = event.data;
          console.log(
            'GridPopoutService: Received message from pop-out:',
            message
          );
          switch (message.type) {
            case 'gridDataUpdated':
              if (message.payload?.points)
                this._gridDataUpdated.next(message.payload?.points);
              break;
            case 'putGridBack':
              const putBackData = {
                points: message.payload?.points || [],
                plannerType: message.payload?.plannerType,
                dayOfWeek: message.payload?.dayOfWeek,
                routes: message.payload?.routes,
              };
              this._putGridBack.next(putBackData);
              this.setGridPoppedOut(false);
              break;
            case 'initializeGridData':
              if (message.payload?.points) {
                this._initializeGridData.next(message.payload.points);
              }
              break;

            case 'windowClosing':
              this.setGridPoppedOut(false);
              break;
            default:
              console.warn(
                'GridPopoutService: Unknown message type:',
                message.type
              );
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

  // Method to send messages to the pop-out window
  sendMessage(message: PopoutMessage): void {
    if (this.broadcastChannel) {
      console.log('GridPopoutService: Sending message:', message);
      this.broadcastChannel.postMessage(message);
    } else {
      console.warn(
        'GridPopoutService: BroadcastChannel not initialized. Cannot send message.'
      );
    }
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
          this.sendMessage({ type: 'windowClosing' });
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
  // Clean up BroadcastChannel on service destruction (optional, but good practice)
  ngOnDestroy(): void {
    if (this.broadcastChannel) {
      this.broadcastChannel.close();
      this.broadcastChannel = null;
    }
  }
}
