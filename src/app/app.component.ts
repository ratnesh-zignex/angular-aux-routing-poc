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
import { NavigationService } from './route-planner/shared/services/Navigation/navigation.service';

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
      if (event instanceof NavigationStart) {
        if (event.url === '/') {
          console.log('navigation RP now');
            this.navService.navigateToDefault();
        }
      } else if (event instanceof NavigationError) {
        console.warn('Navigation error:', event);
        this.navService.navigateToDefault();
      }
    });
    console.log('app compponent', this.router.url);
  }
}
