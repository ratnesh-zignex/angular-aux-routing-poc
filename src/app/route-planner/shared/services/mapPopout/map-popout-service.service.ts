import { Inject, Injectable, NgZone, PLATFORM_ID } from '@angular/core';
import {
  MapGridState,
  MapPoint,
  SidebarState,
} from '../Navigation/navigation.service';
import { Observable, Subject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
export interface PopoutMessage {
  type: 'mapStateUpdate' | 'sidebarStateUpdate' | 'mapEvent' | string;
  payload: any;
}
@Injectable({
  providedIn: 'root',
})
export class MapPopoutServiceService {
  private popoutWindow: Window | null = null;
  private broadcastChannel: BroadcastChannel | null = null;
  private readonly channelName = 'map_popout_channel';
  // Subjects to emit incoming messages from the pop-out window
  private _mapStateUpdates = new Subject<MapGridState>();
  mapStateUpdates$: Observable<MapGridState> =
    this._mapStateUpdates.asObservable();
  private _sidebarStateUpdates = new Subject<SidebarState>();
  sidebarStateUpdates$: Observable<SidebarState> =
    this._sidebarStateUpdates.asObservable();
  private _mapEvents = new Subject<any>();
  mapEvents$: Observable<any> = this._mapEvents.asObservable();
  constructor(
    private ngZone: NgZone,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    // Initialize BroadcastChannel if not already done (e.g., on app reload)
    if (isPlatformBrowser(this.platformId)) this.initializeBroadcastChannel();
  }
  initializeBroadcastChannel(): void {
    if (!this.broadcastChannel) {
      this.broadcastChannel = new BroadcastChannel(this.channelName);
      this.broadcastChannel.onmessage = (event: MessageEvent) => {
        this.ngZone.run(() => {
          // Ensure Angular change detection runs
          const message: PopoutMessage = event.data;
          console.log('Received message from pop-out:', message);
          switch (message.type) {
            case 'mapStateUpdate':
              this._mapStateUpdates.next(message.payload);
              break;
            case 'sidebarStateUpdate':
              this._sidebarStateUpdates.next(message.payload);
              break;
            case 'mapEvent':
              this._mapEvents.next(message.payload);
              break;
            default:
              console.warn('Unknown message type:', message.type);
          }
        });
      };
      this.broadcastChannel.onmessageerror = (error) => {
        console.error('BroadcastChannel message error:', error);
      };
    }
  }

  openPopoutMap(
    initialMapGridState: MapGridState,
    initialSidebarState: SidebarState
  ): void {
    if (!isPlatformBrowser(this.platformId)) return;
    if (this.popoutWindow && !this.popoutWindow.closed) {
      this.popoutWindow.focus();
      return;
    }
    // Construct the URL for the pop-out window
    // We'll create a dedicated route for the pop-out map
    const mapId = initialMapGridState.mapId || 'main';
    const view = initialMapGridState.view || 'daily';
    const dayOfWeek = initialMapGridState.dayOfWeek || '';
    const routes =
      initialMapGridState.selectedRoutes.length > 0
        ? initialMapGridState.selectedRoutes.join(',')
        : '';
    // The URL for the pop-out map will be a simplified version, only showing the map
    // Example: /popout-map/daily/main/Monday/1001,1002
    const popoutUrl = `/popout-map/${view}/${mapId}/${dayOfWeek}${
      routes ? '/' + routes : ''
    }`;
    this.popoutWindow = window.open(popoutUrl, 'MapPopoutWindow');
    if (this.popoutWindow) {
      // Send initial state to the new window once it's loaded
      this.popoutWindow.onload = () => {
        this.sendMessage({
          type: 'mapStateUpdate',
          payload: initialMapGridState,
        });
        this.sendMessage({
          type: 'sidebarStateUpdate',
          payload: initialSidebarState,
        });
      };
      // Listen for the pop-out window closing
      this.popoutWindow.onbeforeunload = () => {
        console.log('Pop-out window is closing.');
        this.popoutWindow = null;
        // Optionally, send a message back to the main window that it closed
        // this.sendMessage({ type: 'popoutClosed', payload: null });
      };
    } else {
      console.error('Failed to open pop-out window. Pop-ups might be blocked.');
    }
  }
  sendMessage(message: PopoutMessage): void {
    if (this.broadcastChannel) {
      this.broadcastChannel.postMessage(message);
    } else {
      console.warn('BroadcastChannel not initialized. Cannot send message.');
    }
  }
  isPopoutOpen(): boolean {
    return this.popoutWindow !== null && !this.popoutWindow.closed;
  }
  closePopout(): void {
    if (this.popoutWindow) {
      this.popoutWindow.close();
      this.popoutWindow = null;
    }
  }

  // Add these new methods to handle enhanced messaging

  sendMapEvent(eventType: string, payload: any): void {
    this.sendMessage({
      type: 'mapEvent',
      payload: { type: eventType, payload },
    });
  }

  // Add point-specific message handlers
  sendPointUpdate(points: MapPoint[]): void {
    this.sendMessage({
      type: 'mapStateUpdate',
      payload: { points },
    });
  }

  sendPointMoved(
    pointId: string,
    newPosition: { lat: number; lng: number },
    points: MapPoint[]
  ): void {
    this.sendMapEvent('POINT_MOVED', { pointId, newPosition, points });
  }

  sendColorChanged(
    pointId: string,
    newColor: string,
    points: MapPoint[]
  ): void {
    this.sendMapEvent('POINT_COLOR_CHANGED', { pointId, newColor, points });
  }

  // Clean up the BroadcastChannel when the service is destroyed (e.g., on app refresh/close)
  ngOnDestroy(): void {
    if (this.broadcastChannel) {
      this.broadcastChannel.close();
      this.broadcastChannel = null;
    }
  }
}
