import { Component, OnInit } from '@angular/core';
import { RoutePlannerRoutingModule } from './route-planner-routing.module';
import { MapComponent } from './map-grid/map/map.component';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { RoutePlannerModule } from './route-planner.module';
import { MapGridState, NavigationService, SidebarState } from './shared/services/navigation.service';

@Component({
  selector: 'app-route-planner',
  standalone: true,
  imports: [RouterOutlet, MapComponent],
  templateUrl: './route-planner.component.html',
  styleUrl: './route-planner.component.scss',
})
export class RoutePlannerComponent implements OnInit {
  constructor(private router: Router, public navService: NavigationService) {}
  mapPoints: any[] = [];

  ngOnInit() {
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          console.log('Navigated to:', event.url);
        }
      });
    // Only navigate to sidebar if not already there
    const currentUrl = this.router.url;
    console.log('AppComponent ngOnInit - current URL:', this.router.url);
    if (currentUrl === '/rp' || currentUrl === '/') {
      this.navigateToDefault();
    }
  }
  private navigateToDefault() {
    // Navigate with all required outlets
    // this.router.navigate([
    //   '/rp',
    //   {
    //     outlets: {
    //       sidebar: ['sidebar', 'Comm', 'FL', 'Monday', 'routes'],
    //       mapgrid: [
    //         'mapgrid',
    //         'daily',
    //         {
    //           outlets: {
    //             grid: ['grid', 'Monday', 'Ro'],
    //             map: ['map', 'map1'],
    //           },
    //         },
    //       ],
    //     },
    //   },
    // ]);
    // Get current states from NavigationService (which might have been initialized from URL)
    const currentSidebarState = this.navService.getCurrentSidebarState();
    const currentMapGridState = this.navService.getCurrentMapGridState();
    // Define default states if current ones are not fully populated or if we want to enforce defaults
    const defaultSidebarState: SidebarState = {
      plannerType: 'rp',
      operationUnit: 'Comm',
      routeType: 'FL',
      dayOfWeek: 'Monday',
      tabName: 'routes',
      selectedRoutes: [], // Sidebar's selected routes (checkboxes)
    };
    this.navService.updateSidebarState(defaultSidebarState);
    const defaultMapGridState: MapGridState = {
      view: 'daily',
      dayOfWeek: '', // Map/Grid's dayOfWeek
      selectedRoutes: [], // Map/Grid's loaded routes
      mapId: 'main',
    };
    this.navService.updateMapGridState(defaultMapGridState);
    // Use the service's syncStatesAndNavigate to ensure both parts of the URL are built correctly
    // This will trigger the navigateFull method in NavigationService
    this.navService.syncStatesAndNavigate();
  }
}
