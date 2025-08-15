import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  NavigationService,
  SidebarState,
} from '../../../shared/services/navigation.service';

@Component({
  selector: 'app-dp',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dp.component.html',
  styleUrl: './dp.component.scss',
})
export class DpComponent implements OnInit {
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

  constructor(
    private router: Router,
    public navService: NavigationService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => {
      console.log('sidebar params:', params);

      const tabName = params['tabName'];
      this.navService.changeTab(tabName);
      this.tabName = tabName || 'routes';
    });
  }

  ngOnInit() {
    console.log('tab name');
    // this.route.params.subscribe((params) => {
    //   const tabName = params['tabName'];
    //   if (tabName && this.tabs.includes(tabName)) {
    //     this.selectedTab = tabName;
    //   }
    // });
    // this.dataSync.selectedRoutes =
    //   this.routesByDay[this.dataSync.selectedDayOfWeek];
    this.navService.sidebarState$.subscribe((state) => {
      this.currentState = state;
    });
  }

  // loadData() {
  //   // Trigger navigation to show map and grid with selected routes
  //   const currentState = this.navService.getCurrentState();
  //   this.navService.updateState({
  //     ...currentState,
  //     selectedRoutes: this.selectedRoutes,
  //   });
  // }
  // onRouteToggle(route: string, event: Event) {
  //   const input = event.target as HTMLInputElement;
  //   const isChecked = input?.checked;
  //   if (isChecked) {
  //     if (!this.dataSync.selectedRoutes.includes(route))
  //       this.dataSync.selectedRoutes.push(route);
  //   } else {
  //     this.dataSync.selectedRoutes = this.dataSync.selectedRoutes.filter(
  //       (r) => r !== route
  //     );
  //   }
  // }
  // onRouteToggle(routeName: string, event: Event) {
  //   const input = event.target as HTMLInputElement;
  //   const isChecked = input?.checked;

  //   let newSelectedRoutes: string[];
  //   if (isChecked) {
  //     newSelectedRoutes = [...this.selectedRoutes, routeName];
  //   } else {
  //     newSelectedRoutes = this.selectedRoutes.filter((r) => r !== routeName);
  //   }

  //   this.navService.updateSelectedRoutes(newSelectedRoutes);
  // }
  onRouteToggle(routeName: string, event: Event) {
    const input = event.target as HTMLInputElement;
    const isChecked = input?.checked;

    let newSelectedRoutes: string[];
    if (isChecked) {
      console.log(this.currentState.selectedRoutes);
      console.log(routeName);
      newSelectedRoutes = [...this.currentState.selectedRoutes, routeName];
    } else {
      newSelectedRoutes = this.currentState.selectedRoutes.filter(
        (r: string) => r !== routeName
      );
    }
    console.log(newSelectedRoutes);
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
    console.log('Loading data with routes:', this.currentState.selectedRoutes);
    this.navService.loadData();
  }
}
