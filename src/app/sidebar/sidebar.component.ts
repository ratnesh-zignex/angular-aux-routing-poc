import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel, NgModelGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataSyncService } from '../data-sync.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  operationUnits = ['Comm', 'Ops', 'Tech'];
  routeTypes = ['FL', 'SL', 'EXP'];
  daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  tabs = ['Route', 'Ungeocoded', 'Facility'];
  selectedTab = 'Route';

  routesByDay: { [key: string]: string[] } = {
    Monday: ['1001', '1002', '1003'],
    Tuesday: ['2001', '2002', '2003'],
    Wednesday: ['3001', '3002'],
    Thursday: ['4001'],
    Friday: ['5001', '5002'],
  };

  selectedOperationUnit = 'Comm';
  selectedRouteType = 'FL';
  selectedDayOfWeek = 'Monday';
  selectedRoutes: string[] = [];
  appName = 'Route Planner';
  primaryRoute: string = '';

  constructor(
    private router: Router,
    private dataSync: DataSyncService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => {
      // This will fire when browser navigation changes params
      this.selectedOperationUnit = params['operationUnit'] || 'Comm';
      this.selectedRouteType = params['routeType'] || 'FL';
      this.selectedDayOfWeek = params['dayOfWeek'] || 'Monday';

      // Update selectedRoutes for the new day
      this.updateRoutesForDay(this.selectedDayOfWeek);
      this.updateAppName();
      console.log(
        this.selectedOperationUnit,
        this.selectedRouteType,
        this.selectedDayOfWeek
      );
    });
  }

  ngOnInit() {
    console.log('on initi sidebar');
    this.selectedRoutes = this.routesByDay[this.selectedDayOfWeek];
    this.updateRoutesForDay(this.selectedDayOfWeek);
  }

  onOperationUnitChange(op: string) {
    this.selectedOperationUnit = op;
    this.navigateSidebar();
  }
  onRouteTypeChange(rt: string) {
    this.selectedRouteType = rt;
    this.navigateSidebar();
  }
  onDayOfWeekChange(day: string) {
    this.selectedDayOfWeek = day;
    this.selectedRoutes = this.routesByDay[day] || [];
    this.updateRoutesForDay(day);
    this.navigateSidebar();
  }
  onTabChange(tab: string) {
    this.selectedTab = tab;
  }
  navigateSidebar() {
    this.router.navigate([
      this.primaryRoute,
      {
        outlets: {
          sidebar: [
            'sidebar',
            this.selectedOperationUnit,
            this.selectedRouteType,
            this.selectedDayOfWeek,
          ],
        },
      },
    ]);
    this.updateAppName();
  }
  updateAppName() {
    if (window.location.pathname.includes('/sp')) {
      this.primaryRoute = '/sp';
      this.appName = 'Scenario Planner';
    } else if (window.location.pathname.includes('/mp')) {
      this.primaryRoute = '/mp';
      this.appName = 'Monthly Planner';
    } else {
      this.primaryRoute = '/rp';
      this.appName = 'Route Planner';
    }
  }
  loadData() {
    console.log('in loade Data');
    // Pick 2 routes for demo
    let points: any[] = [];
    this.selectedRoutes.map((r, i) => {
      points.push({
        route: r,
        lat: 40.7128 + i * 0.009,
        lng: -74.006 + i * 0.009,
        color: 'red',
      });
    });
    this.router.navigate(
      [
        this.primaryRoute,
        {
          outlets: {
            mapgrid: [
              'mapgrid',
              'daily',
              this.selectedDayOfWeek,
              this.selectedRoutes.join(','),
            ],
          },
        },
      ],
      { relativeTo: undefined }
    );
    this.dataSync.setPoints(points);
  }
  updateRoutesForDay(day: string) {
    this.selectedRoutes = this.routesByDay[day]
      ? [...this.routesByDay[day]]
      : [];
  }
  onRouteToggle(route: string, event: Event) {
    const input = event.target as HTMLInputElement;
    const isChecked = input?.checked;
    if (isChecked) {
      if (!this.selectedRoutes.includes(route)) this.selectedRoutes.push(route);
    } else {
      this.selectedRoutes = this.selectedRoutes.filter((r) => r !== route);
    }
  }
}
