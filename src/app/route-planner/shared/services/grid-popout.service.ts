import { Injectable, NgZone, OnDestroy } from '@angular/core';
import { Subject, Observable } from 'rxjs';
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
  private _gridDataUpdated = new Subject<{ points: any[] }>();
  gridDataUpdated$: Observable<{ points: any[] }> =
    this._gridDataUpdated.asObservable();
  private _putGridBack = new Subject<void>();
  putGridBack$: Observable<void> = this._putGridBack.asObservable();
  // State management for the pop-out window
  private _gridPopoutWindow: Window | null = null;
  private _gridOriginalParent: HTMLElement | null = null;
  private _gridComponentElement: HTMLElement | null = null; // Reference to the grid's DOM element

  constructor(private ngZone: NgZone) {
    this.initializeBroadcastChannel();
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
              this._gridDataUpdated.next(message.payload);
              break;
            case 'putGridBack':
              this._putGridBack.next();
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
      this.broadcastChannel.postMessage(message);
    } else {
      console.warn(
        'GridPopoutService: BroadcastChannel not initialized. Cannot send message.'
      );
    }
  }
  // Methods to manage the grid's DOM element and pop-out window state
  setGridComponentElement(element: HTMLElement | null) {
    this._gridComponentElement = element;
  }
  getGridComponentElement(): HTMLElement | null {
    return this._gridComponentElement;
  }
  setGridOriginalParent(parent: HTMLElement | null) {
    this._gridOriginalParent = parent;
  }
  getGridOriginalParent(): HTMLElement | null {
    return this._gridOriginalParent;
  }

  setGridPopoutWindow(win: Window | null) {
    this._gridPopoutWindow = win;
  }
  getGridPopoutWindow(): Window | null {
    return this._gridPopoutWindow;
  }
  isGridPoppedOut(): boolean {
    return this._gridPopoutWindow !== null && !this._gridPopoutWindow.closed;
  }
  // Clean up BroadcastChannel on service destruction (optional, but good practice)
  ngOnDestroy(): void {
    if (this.broadcastChannel) {
      this.broadcastChannel.close();
      this.broadcastChannel = null;
    }
  }
}
