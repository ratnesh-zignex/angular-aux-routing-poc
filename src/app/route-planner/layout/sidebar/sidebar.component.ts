import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
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
  localSelectedDayOfWeek: string = ''; // Local property for view binding
  isNavigating = false;
  destroy$ = new Subject<void>();
  constructor(
    private route: ActivatedRoute,
    public navService: NavigationService,
    private router: Router,
    private cdr: ChangeDetectorRef
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
    
    // ✅ FIX: Set daysOfWeek AND selectedDayOfWeek synchronously when data is cached
    if (this.routeType.length > 0) {
      this.daysOfWeek = this.routeType[0]?.dow || [];
      
      // Get route type from current URL to set selectedDayOfWeek
      // URL format: /rp/(sidebar:sidebar/4020/FC/MONDAY/routes...
      const sidebarMatch = this.router.url.match(/sidebar\/([^\/]+)\/([^\/]+)\/([^\/]+)/);
      if (sidebarMatch && sidebarMatch[3]) {
        const urlDayOfWeek = sidebarMatch[3];
        if (this.daysOfWeek.includes(urlDayOfWeek)) {
          this.navService.selectedDayOfWeek = urlDayOfWeek;
          this.localSelectedDayOfWeek = urlDayOfWeek; // Sync local property
        }
      }
    }
    
    // Note: daysOfWeek is set in initializeSidebarProperties based on current route type
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
        const operationUnit = params['operationUnit'];
        const routeType = params['routeType'];
        const dayOfWeek = params['dayOfWeek'];
        
        // Update local property from URL params
        if (dayOfWeek) {
          this.localSelectedDayOfWeek = dayOfWeek;
        }

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
              tabName: this.getTabNameFromUrl(), // ✅ FIX: Pass tabName from URL
            },
          );
          this.updateAppName();
          this.navService.selectedOperationUnit = operationUnit;
          this.navService.selectedRouteType = routeType;
          this.navService.selectedDayOfWeek = dayOfWeek;
          this.navService.selectedDayOfWeek = dayOfWeek;
          if (dayOfWeek) {
            this.localSelectedDayOfWeek = dayOfWeek; // Sync local
          }
        }
        
        const secondCondition = 
          this.navService.selectedOperationUnit !== operationUnit ||
          this.navService.selectedRouteType !== routeType ||
          this.navService.selectedDayOfWeek !== dayOfWeek;
        
        if (secondCondition) {
          this.navService.updateSidebarState(
            {
              operationUnit,
              routeType,
              dayOfWeek,
              plannerType: this.getPlannerTypeFromUrl(),
              tabName: this.getTabNameFromUrl(), // ✅ FIX: Pass tabName from URL
            },
          );
          
          // ✅ FIX: Set daysOfWeek for cached data case
          const matchingRouteType = this.navService.routeTypeList.find(
            rt => rt.routeType === routeType
          );

          if (matchingRouteType && matchingRouteType.dow) {
            this.daysOfWeek = matchingRouteType.dow;
          }
          
          this.navService.selectedOperationUnit = operationUnit;
          this.navService.selectedRouteType = routeType;
          this.navService.selectedDayOfWeek = dayOfWeek;
          if (dayOfWeek) {
            this.localSelectedDayOfWeek = dayOfWeek; // Sync local
          }

          this.updateAppName();
        }
        
        // Force change detection to ensure UI updates, wrapped in setTimeout to avoid NG0100
        setTimeout(() => {
          this.cdr.detectChanges();
        });
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
    return 'rp';
  }
  
  private getTabNameFromUrl(): string {
    // URL format: .../sidebar:sidebar/4020/FC/MONDAY/routes...
    // Match the segment after dayOfWeek
    const match = this.router.url.match(/sidebar\/[^\/]+\/[^\/]+\/[^\/]+\/([^\/\)]+)/);
    // If we have a match, use it. If not, and we have operationUnit/routeType/dayOfWeek, 
    // it likely means we are at the default state for that day, so default to 'routes'
    // but only if the URL structure implies we should be deep enough.
    // For now, if match finds nothing, return empty or default.
    return match ? match[1] : '';
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
    
    // ✅ FIX: Set daysOfWeek based on the CURRENT route type from URL params
    const currentRouteType = this.routeType.find(rt => rt.routeType === params.routeType);
    this.daysOfWeek = currentRouteType?.dow || this.routeType[0]?.dow || [];
    
    // ✅ FIX: Set selectedDayOfWeek from params so dropdown shows correct value
    if (params.dayOfWeek && this.daysOfWeek.includes(params.dayOfWeek)) {
      this.navService.selectedDayOfWeek = params.dayOfWeek;
      this.localSelectedDayOfWeek = params.dayOfWeek; // Sync local
    }
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
