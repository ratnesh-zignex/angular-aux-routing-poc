import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule, NgModel, NgModelGroup } from '@angular/forms';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import {
  NavigationService,
  SidebarState,
} from '../../shared/services/navigation.service';
import { Subject, distinctUntilChanged, filter, takeUntil } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit, OnDestroy {
  operationUnits = ['Comm', 'Ops', 'Tech'];
  routeTypes = ['FL', 'SL', 'EXP'];
  daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  // tabs = ['Route', 'Ungeocoded', 'Facility'];
  // selectedTab = 'route';

  // routesByDay: { [key: string]: string[] } = {
  //   Monday: ['1001', '1002', '1003'],
  //   Tuesday: ['2001', '2002', '2003'],
  //   Wednesday: ['3001', '3002'],
  //   Thursday: ['4001'],
  //   Friday: ['5001', '5002'],
  // };
  currentState: SidebarState = {
    plannerType: 'rp',
    operationUnit: 'Comm',
    routeType: 'FL',
    dayOfWeek: 'Monday',
    tabName: 'routes',
    selectedRoutes: [],
  };

  appName = 'Route Planner';
  primaryRoute: string = '';
  operationUnit: string = '';
  routeType: string = '';
  dayOfWeek: string = '';
  isNavigating = false;
  destroy$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    public navService: NavigationService,
    private router: Router
  ) {}

  ngOnInit() {
    // Subscribe to sidebar state changes
    this.navService.sidebarState$.subscribe((state) => {
      this.currentState = state;
      this.updateAppContext(state);
    });
    // Initialize from URL parameters
    this.route.params
      .pipe(
        distinctUntilChanged(), // Only emit when params actually change
        filter(() => !this.isNavigating), // Prevent navigation during navigation
        takeUntil(this.destroy$)
      )
      .subscribe((params) => {
        console.log('sidebar params:', params);

        const operationUnit = params['operationUnit'] || 'Comm';
        const routeType = params['routeType'] || 'FL';
        const dayOfWeek = params['dayOfWeek'] || 'Monday';
        // // Update navigation service sidebar state
        this.navService.updateSidebarState({
          operationUnit,
          routeType,
          dayOfWeek,
          plannerType: this.getPlannerTypeFromUrl(),
        });

        // Update legacy properties
        this.navService.selectedOperationUnit = operationUnit;
        this.navService.selectedRouteType = routeType;
        this.navService.selectedDayOfWeek = dayOfWeek;

        this.updateAppName();
      });
  }

  private updateAppContext(state: any) {
    switch (state.plannerType) {
      case 'mp':
        this.appName = 'Monthly Planner';
        break;
      case 'sp':
        this.appName = 'Scenario Planner';
        break;
      default:
        this.appName = 'Route Planner';
    }
  }
  private getPlannerTypeFromUrl(): 'rp' | 'mp' | 'sp' {
    const url = this.router.url;
    if (url.includes('/mp')) return 'mp';
    if (url.includes('/sp')) return 'sp';
    return 'rp';
  }
  onOperationUnitChange(op: string) {
    this.navService.changeOperationUnit(op);
  }
  onRouteTypeChange(rt: string) {
    this.navService.changeRouteType(rt);
  }
  onDayOfWeekChange(day: string) {
    this.navService.changeDow(day);
  }
  updateAppName() {
    if (this.router.url.includes('/sp')) {
      this.navService.primaryRoute = '/sp';
      this.appName = 'Scenario Planner';
    } else if (this.router.url.includes('/mp')) {
      this.navService.primaryRoute = '/mp';
      this.appName = 'Monthly Planner';
    } else {
      this.navService.primaryRoute = '/rp';
      this.appName = 'Route Planner';
    }
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
