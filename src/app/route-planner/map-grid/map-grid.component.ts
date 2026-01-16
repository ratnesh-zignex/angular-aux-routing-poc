import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from "@angular/router";
import { MapGridState, NavigationService } from '../shared/services/navigation.service';
import { Subject, distinctUntilChanged, filter, takeUntil } from 'rxjs';

@Component({
  selector: 'app-map-grid',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './map-grid.component.html',
  styleUrl: './map-grid.component.scss'
})
export class MapGridComponent implements OnInit, OnDestroy {
  showMapOnly = false;
  view: string = '';
  isNavigating: boolean = false;
  destroy$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private navService: NavigationService
  ) {}

  ngOnInit() {
    // Listen for route parameter changes (view parameter)
    this.route.params
      .pipe(
        distinctUntilChanged(),
        filter(() => !this.isNavigating),
        takeUntil(this.destroy$)
      )
      .subscribe((params) => {
        console.log('MapGridComponent: Route params changed:', params);
        this.view = params['view'];
        this.navService.updateMapGridState({ view: this.view });
      });

    // Listen for nested outlet update requests from NavigationService
    this.navService.updateNestedOutletsRequest$
      .pipe(
        filter(state => state !== null),
        takeUntil(this.destroy$)
      )
      .subscribe((state) => {
        console.log('MapGridComponent: Received nested outlet update request', state);
        this.updateNestedOutlets(state!);
      });

    // Initialize nested outlets if there's already state
    const currentState = this.navService.getCurrentMapGridState();
    if (currentState.dayOfWeek && currentState.selectedRoutes.length > 0) {
      setTimeout(() => {
        console.log('MapGridComponent: Initializing nested outlets');
        this.updateNestedOutlets(currentState);
      }, 200);
    }
  }

  /**
   * Navigate to nested grid and map outlets using RELATIVE navigation
   * This prevents sidebar from being affected and avoids full URL rebuild
   */
  private updateNestedOutlets(state: MapGridState) {
    const routesParam = state.selectedRoutes.length > 0 
      ? state.selectedRoutes.join(',') 
      : '';

    console.log('MapGridComponent: Updating nested outlets with relative navigation', {
      dayOfWeek: state.dayOfWeek,
      routes: routesParam,
      mapId: state.mapId
    });

    // Determine grid path based on available data
    let gridPath: string[];
    if (state.dayOfWeek && routesParam) {
      gridPath = ['grid', state.dayOfWeek, routesParam];
    } else if (state.dayOfWeek) {
      gridPath = ['grid', state.dayOfWeek];
    } else {
      gridPath = ['grid'];
    }

    // ✅ KEY: Use RELATIVE navigation - only specify nested outlets
    this.router.navigate([
      {
        outlets: {
          grid: gridPath,
          map: ['map', state.mapId]
        }
      }
    ], { 
      relativeTo: this.route  // Navigate relative to mapgrid route
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}