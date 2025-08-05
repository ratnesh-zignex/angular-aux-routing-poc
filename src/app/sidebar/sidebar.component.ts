import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel, NgModelGroup } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private router: Router, private dataSync: DataSyncService) {}

  ngOnInit() {
    this.selectedRoutes = this.routesByDay[this.selectedDayOfWeek];
    this.updateAppName();
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
    const r1 = this.selectedRoutes[0] || '1001';
    const r2 = this.selectedRoutes[1] || '1002';
    this.router.navigate(
      [
        this.primaryRoute,
        {
          outlets: {
            mapgrid: ['mapgrid', 'daily', this.selectedDayOfWeek, r1, r2],
          },
        },
      ],
      { relativeTo: undefined }
    );
    const points = [
      { route: '1001', lat: 40.7128, lng: -74.006, color: 'red' },
      { route: '1002', lat: 40.7138, lng: -74.016, color: 'red' },
    ];
    this.dataSync.setPoints(points);
  }
}
