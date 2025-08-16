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
      this.navService.navigateToDefault();
    }
  }
  
}
