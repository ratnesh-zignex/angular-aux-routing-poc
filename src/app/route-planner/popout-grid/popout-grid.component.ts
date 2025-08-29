import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { GridPopoutService } from '../shared/services/grid-popout.service';
import { NavigationService } from '../shared/services/navigation.service';
import { MapPoint } from '../shared/interfaces/map-interfaces';
import { PlannerComponent } from '../map-grid/planner/planner.component';

@Component({
  selector: 'app-popout-grid',
  standalone: true,
  imports: [CommonModule, PlannerComponent],
  templateUrl: './popout-grid.component.html',
  styleUrl: './popout-grid.component.scss',
})
export class PopoutGridComponent implements OnInit, OnDestroy {
  gridTitle: string = '';
  dayOfWeek: string = '';
  routes: string[] = [];
  plannerType: string = 'rp';
  destroy$ = new Subject<void>();
  isBrowser: boolean = false;
  isInitialized: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private navService: NavigationService,
    private popoutService: GridPopoutService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
  ngOnInit() {
    if (this.isBrowser) {
      // Set up window close handler
      window.addEventListener('beforeunload', this.handleWindowClose);
      // Get initial data from route params
      this.route.params.pipe(takeUntil(this.destroy$)).subscribe((params) => {
        this.plannerType = params['plannerType'] || 'rp';
        this.dayOfWeek = params['dayOfWeek'] || '';
        const routesParam = params['routes'] || '';
        this.routes =
          routesParam !== 'none'
            ? routesParam
              ? routesParam.split(',')
              : []
            : [];

        this.updateGridTitle();
        this.updateNavigationService();
        this.isInitialized = true;
      });
      // Listen for initialization data from main window
      this.popoutService.initializeGridData$
        .pipe(takeUntil(this.destroy$))
        .subscribe((points) => {
          console.log('PopoutGrid: Received initialization data:', points);
          this.popoutService.popoutGridData = points;
          // Update navigation service with the received data
          this.navService.mapEventSubject.next({ points });
        });
      // Set initial window title
      document.title = 'Grid Popout Window';
    }
  }
  handleWindowClose = () => {
    // Send message to main window that this window is closing
    this.popoutService.sendMessage({
      type: 'windowClosing',
    });
  };
  updateGridTitle() {
    const sidebarState = this.navService.getCurrentSidebarState();
    const plannerTypeLabel = this.getPlannerTypeLabel(this.plannerType);
    const routesDisplay =
      this.routes.length > 0 ? this.routes.join(', ') : 'None';

    this.gridTitle = `${plannerTypeLabel} - ${
      sidebarState.operationUnit || 'Default'
    } - ${this.dayOfWeek} - Routes: ${routesDisplay}`;

    // Update window title as well
    if (this.isBrowser) {
      document.title = `Grid Popout - ${this.gridTitle}`;
    }
  }
  getPlannerTypeLabel(type: string): string {
    switch (type) {
      case 'rp':
        return 'Route Planner';
      case 'mp':
        return 'Monthly Planner';
      case 'sp':
        return 'Strategic Planner';
      default:
        return 'Planner';
    }
  }
  updateNavigationService() {}
  putGridBack() {
    // Get current grid data from the navigation service
    const currentPoints: MapPoint[] = this.popoutService.popoutGridData;

    // Send message to main window to put grid back
    this.popoutService.sendMessage({
      type: 'putGridBack',
      payload: {
        points: currentPoints,
        plannerType: this.plannerType,
        dayOfWeek: this.dayOfWeek,
        routes: this.routes,
      },
    });

    // Close this window
    if (this.isBrowser && window.opener) {
      window.close();
    }
  }
  ngOnDestroy() {
    if (this.isBrowser) {
      window.removeEventListener('beforeunload', this.handleWindowClose);
    }
    this.destroy$.next();
    this.destroy$.complete();
  }
}
