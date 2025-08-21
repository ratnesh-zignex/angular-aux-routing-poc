import { Component, ComponentRef, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Subject, Subscription, distinctUntilChanged, filter, takeUntil } from 'rxjs';
import {
  MapGridState,
  NavigationService,
  SidebarState,
} from '../../../shared/services/Navigation/navigation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MapPopoutServiceService } from '../../../shared/services/mapPopout/map-popout-service.service';
import { MapComponent } from '../map.component';

@Component({
  selector: 'app-popout-map',
  standalone: true,
  imports: [],
  // providers: [NavigationService, MapPopoutServiceService],
  templateUrl: './popout-map.component.html',
  styleUrl: './popout-map.component.scss',
})
export class PopoutMapComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription = new Subscription();
  currentMapGridState: MapGridState | null = null;
  currentSidebarState: SidebarState | null = null;
  @ViewChild('mapContainer', { read: ViewContainerRef })
  mapContainer!: ViewContainerRef;
  private mapComponentRef: ComponentRef<any> | null = null;
  isNavigating: boolean = false;
  destroy$ = new Subject<void>();
  constructor(
    private route: ActivatedRoute,
    private popoutService: MapPopoutServiceService,
    private navService: NavigationService, // public mapComp: MapComponent,
    private router: Router
  ) {
    // Listen for initial state from the URL (if any)
    this.route.params
      .pipe(
        distinctUntilChanged(), // Only emit when params actually change
        filter(() => !this.isNavigating), // Prevent navigation during navigation
        takeUntil(this.destroy$)
      )
      .subscribe((params) => {
        const mapId = params['mapId'] || 'main';
        const view = params['view'] || 'daily';
        const dayOfWeek = params['dayOfWeek'] || '';
        const routes = params['routes'] ? params['routes'].split(',') : [];
        this.currentMapGridState = {
          mapId,
          view,
          dayOfWeek,
          selectedRoutes: routes,
        };
        console.log(
          'PopoutMapComponent initialized with URL params:',
          this.currentMapGridState
        );
        this.router.navigate([
          `popout-map/${view}/${mapId}/${dayOfWeek}/${routes}`,
        ]);
        // if (this.mapComp) this.mapComp.updateMapFeatures(); // Update map based on initial URL params
      });
    // Subscribe to incoming state updates from the main window
    this.subscriptions.add(
      this.popoutService.mapStateUpdates$.subscribe((state) => {
        console.log('PopoutMapComponent received mapStateUpdate:', state);
        this.currentMapGridState = state;
        this.router.navigate([
          `popout-map/${this.currentMapGridState.view}/${this.currentMapGridState.mapId}/${this.currentMapGridState.dayOfWeek}/${this.currentMapGridState.selectedRoutes}`,
        ]);

        // Here you can call a method to update the map if needed
      })
    );
    this.subscriptions.add(
      this.popoutService.sidebarStateUpdates$.subscribe((state) => {
        console.log('PopoutMapComponent received sidebarStateUpdate:', state);
        this.currentSidebarState = state;
        // If sidebar state affects map, update map accordingly
      })
    );
  }
  async ngOnInit() {
    // Dynamically load MapComponent
    try {
      const { MapComponent } = await import('../map.component');
      this.mapComponentRef = this.mapContainer.createComponent(MapComponent);
      console.log('MapComponent loaded successfully in popout');
    } catch (error) {
      console.error('Failed to load MapComponent:', error);
    }
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
    // No need to close BroadcastChannel here, PopoutService handles it.
    if (this.mapComponentRef) {
      this.mapComponentRef.destroy();
    }
    this.destroy$.next();
    this.destroy$.complete();
  }
}
