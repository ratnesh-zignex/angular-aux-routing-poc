import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
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
import { GridPopoutService } from './route-planner/shared/services/grid-popout.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  isBrowser: boolean = false;
  constructor(
    private router: Router,
    private navService: NavigationService,
    private gridPopoutService: GridPopoutService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        if (event.url === '/') {
          console.log('navigation RP now');
          this.navService.navigateToDefault();
        }
      } else if (event instanceof NavigationError) {
        console.warn('Navigation error:', event);
        if (event.error.message.includes('Cannot match any routes'))
          this.navService.navigateToDefault();
      }
    });
    console.log('app compponent', this.router.url);
    if (this.isBrowser)
      // This fires when the main window is about to be closed or refreshed
      window.addEventListener('beforeunload', this.handleBeforeUnload);
  }

  handleBeforeUnload = () => {
    if (this.gridPopoutService.isGridPoppedOut()) {
      const popoutWindow = this.gridPopoutService.getGridPopoutWindow();
      if (popoutWindow && !popoutWindow.closed) {
        // Send a message to the pop-out window to close itself
        // This is a fallback, as the pop-out's onbeforeunload should also handle it
        // But this ensures the main app tries to clean up.
        popoutWindow.close();
      }
    }
  };
  ngOnDestroy(): void {
    // Clean up the event listener when the AppComponent is destroyed
    if (this.isBrowser)
      window.removeEventListener('beforeunload', this.handleBeforeUnload);
  }
}
