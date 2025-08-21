import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  NavigationService,
  SidebarState,
} from '../../../shared/services/Navigation/navigation.service';
import { MapPopoutServiceService } from '../../../shared/services/mapPopout/map-popout-service.service';
import { Subject, distinctUntilChanged, filter, takeUntil } from 'rxjs';

@Component({
  selector: 'app-dp',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dp.component.html',
  styleUrl: './dp.component.scss',
})
export class DpComponent implements OnInit, OnDestroy {
  rpTabs = [
    { value: 'routes', label: 'Routes' },
    { value: 'facility', label: 'Facility' },
    { value: 'ungeocoded', label: 'Ungeocoded' },
  ];
  // tabs = ['routes', 'Facility', 'Ungeocoded'];
  selectedTab = 'routes';
  tabName: string = 'routes';
  // routes: any[] = [
  //   { name: '1001', selected: false },
  //   { name: '1002', selected: false },
  //   { name: '1003', selected: false },
  // ];
  routesByDay: { [key: string]: string[] } = {
    Monday: ['1001', '1002', '1003'],
    Tuesday: ['2001', '2002', '2003'],
    Wednesday: ['3001', '3002'],
    Thursday: ['4001'],
    Friday: ['5001', '5002'],
  };

  currentState: SidebarState = {
    plannerType: 'rp',
    operationUnit: 'Comm',
    routeType: 'FL',
    dayOfWeek: 'Monday',
    tabName: 'routes',
    selectedRoutes: [],
  };
  selectedRoutes: string[] = [];
  isNavigating: boolean = false;
  destroy$ = new Subject<void>();

  constructor(
    private router: Router,
    public navService: NavigationService,
    private route: ActivatedRoute,
    public popoutService: MapPopoutServiceService
  ) {
    this.route.params
      .pipe(
        distinctUntilChanged(), // Only emit when params actually change
        filter(() => !this.isNavigating), // Prevent navigation during navigation
        takeUntil(this.destroy$)
      )
      .subscribe((params) => {
        console.log('dp params:', params);
        const tabName = params['tabName'];
        this.navService.changeTab(tabName);
        this.tabName = tabName || 'routes';
      });
  }

  ngOnInit() {
    this.navService.sidebarState$.subscribe((state) => {
      this.currentState = state;
    });
  }
  onRouteToggle(routeName: string, event: Event) {
    const input = event.target as HTMLInputElement;
    const isChecked = input?.checked;

    let newSelectedRoutes: string[];
    if (isChecked) {
      newSelectedRoutes = [...this.currentState.selectedRoutes, routeName];
    } else {
      newSelectedRoutes = this.currentState.selectedRoutes.filter(
        (r: string) => r !== routeName
      );
    }
    this.currentState.selectedRoutes = newSelectedRoutes;
    this.navService.updateSelectedRoutes(newSelectedRoutes);
  }
  onTabChange(tabName: string) {
    this.tabName = tabName;
    this.navService.changeTab(tabName);
  }
  getAvailableRoutes(): string[] {
    return this.routesByDay[this.currentState.dayOfWeek] || [];
  }
  selectAll() {
    const allRoutes = this.getAvailableRoutes();
    this.navService.updateSelectedRoutes(allRoutes);
  }
  clearAll() {
    this.navService.updateSelectedRoutes([]);
  }
  loadData() {
    // This will sync sidebar state to map-grid and navigate
    this.navService.loadData();
  }
  popOutMap(): void {
    const currentMapGridState = this.navService.getCurrentMapGridState();
    const currentSidebarState = this.navService.getCurrentSidebarState();
    this.popoutService.openPopoutMap(currentMapGridState, currentSidebarState);
  }

  closePopout(): void {
    this.popoutService.closePopout();
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
