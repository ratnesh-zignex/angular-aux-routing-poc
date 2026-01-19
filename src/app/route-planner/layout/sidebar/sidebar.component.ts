import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormsModule, NgModel, NgModelGroup } from '@angular/forms';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import {
  IZOpsUnitData,
  IZRouteTypeResponse,
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
  operationUnits: string[] = [];
  routeTypes: string[] = [];
  daysOfWeek: string[] = [];
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
    plannerType: '',
    operationUnit: '',
    routeType: '',
    dayOfWeek: '',
    tabName: '',
    selectedRoutes: [],
  };

  appName = 'Route Planner';
  primaryRoute: string = '';
  operationUnit: IZOpsUnitData[] = [];
  routeType: IZRouteTypeResponse[] = [];
  dayOfWeek: string = '';
  isNavigating = false;
  destroy$ = new Subject<void>();
  constructor(
    private route: ActivatedRoute,
    public navService: NavigationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.operationUnit = this.navService.operationUnitList;
    this.operationUnit.forEach((e: IZOpsUnitData) => {
      this.operationUnits.push(e.opsUnitCd);
    });
    this.routeType = this.navService.routeTypeList;
    this.routeType.forEach((e) => {
      this.routeTypes.push(e.routeType);
    });
    this.daysOfWeek = this.routeType[0]?.dow;
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
      .subscribe(async (params) => {
        console.log('SidebarComponent: Route params changed:', params);
        const operationUnit = params['operationUnit'];
        const routeType = params['routeType'];
        const dayOfWeek = params['dayOfWeek'];
        if (
          !this.navService.operationUnitList.length &&
          !this.navService.routeTypeList.length
        ) {
          await this.initializeSidebarProperties({
            operationUnit,
            routeType,
            dayOfWeek,
          });
          // Update legacy properties
          this.navService.updateSidebarState(
            {
              operationUnit,
              routeType,
              dayOfWeek,
              plannerType: this.getPlannerTypeFromUrl(),
            },
          );
          this.updateAppName();
          this.navService.selectedOperationUnit = operationUnit;
          this.navService.selectedRouteType = routeType;
          this.navService.selectedDayOfWeek = dayOfWeek;
        }
        if (
          this.navService.selectedOperationUnit !== operationUnit &&
          this.navService.selectedRouteType !== routeType &&
          this.navService.selectedDayOfWeek !== dayOfWeek
        ) {
          this.navService.updateSidebarState(
            {
              operationUnit,
              routeType,
              dayOfWeek,
              plannerType: this.getPlannerTypeFromUrl(),
            },
            true,
          );
          this.navService.selectedOperationUnit = operationUnit;
          this.navService.selectedRouteType = routeType;
          this.navService.selectedDayOfWeek = dayOfWeek;
          this.updateAppName();
        }
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
  async onOperationUnitChange(op: string) {
    await this.navService.getRouteType(op);
    this.routeType = this.navService.routeTypeList;
    this.routeTypes = [];
    this.routeType.forEach((e) => {
      this.routeTypes.push(e.routeType);
    });
    this.daysOfWeek = this.routeType[0].dow;
    this.navService.selectedOperationUnit = op;
    this.navService.selectedRouteType = this.routeType[0].routeType;
    this.navService.selectedDayOfWeek = this.daysOfWeek[0];
    console.log(this.navService.selectedRouteType);
    console.log(this.routeType);
    this.navService.updateSelectedRoutes([]);
    this.navService.updateSidebarState({
      operationUnit: op,
      dayOfWeek: this.daysOfWeek[0],
      routeType: this.routeType[0].routeType,
    });
  }
  onRouteTypeChange(rt: string) {
    this.daysOfWeek = this.routeType.find((e) => e.routeType === rt)?.dow ?? [];
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
  async initializeSidebarProperties(params: {
    operationUnit: string;
    routeType: string;
    dayOfWeek: string;
  }) {
    await this.navService.getOpsUnit();
    this.operationUnit = this.navService.operationUnitList;
    this.operationUnit.forEach((e: IZOpsUnitData) => {
      this.operationUnits.push(e.opsUnitCd);
    });
    await this.navService.getRouteType(params.operationUnit);
    this.routeType = this.navService.routeTypeList;
    this.routeType.forEach((e) => {
      this.routeTypes.push(e.routeType);
    });
    this.daysOfWeek = this.routeType[0]?.dow;
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
