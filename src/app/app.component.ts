import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  NavigationError,
  NavigationSkipped,
  NavigationStart,
  Router,
  RouterOutlet,
} from '@angular/router';
import { RoutePlannerComponent } from './route-planner/route-planner.component';
import { NavigationService } from './route-planner/shared/services/navigation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private navService: NavigationService) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log('Navigated to:', event.url);
      } else if (event instanceof NavigationStart) {
        console.log('Navigation started:', event.url);
      } else if (event instanceof NavigationError) {
        console.log('Navigation ended:', event.url);
      } else if (event instanceof NavigationSkipped) {
        console.log('Navigation ended:', event.url);
      }
    });
    // Navigate to default route if no specific route is provided
    if (this.router.url === '/') {
      console.log('navigation RP');
      this.navService.navigateToDefault();
    }
  }
}
