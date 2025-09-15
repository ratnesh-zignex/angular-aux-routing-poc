import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  NavigationService,
  SidebarState,
} from '../../../shared/services/navigation.service';
import { Subject, distinctUntilChanged, filter, takeUntil } from 'rxjs';
import { HttpService } from '../../../shared/services/http.service';
import { HttpResponse } from '@angular/common/http';
import { IZRouteDataDOW } from '../../../shared/interfaces/interfaces';

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
  routes: { routeNo: string; custCnt: number }[] = [];

  constructor(
    private router: Router,
    public navService: NavigationService,
    private route: ActivatedRoute,
    private http: HttpService
  ) {
    this.route.params
      .pipe(
        distinctUntilChanged(), // Only emit when params actually change
        filter(() => !this.isNavigating), // Prevent navigation during navigation
        takeUntil(this.destroy$)
      )
      .subscribe((params) => {
        if (
          this.navService.operationUnitList.length &&
          this.navService.routeTypeList.length
        ) {
          this.onTabChange(params['tabName']);
        }
      });
  }

  ngOnInit() {
    this.navService.sidebarState$.subscribe((state) => {
      this.currentState = state;
      console.log('state update');
      this.getAvailableRoutes();
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
    console.log(newSelectedRoutes);
    this.navService.updateSelectedRoutes(newSelectedRoutes);
  }
  onTabChange(tabName: string) {
    this.tabName = tabName;
    this.navService.changeTab(tabName);
  }
  async getAvailableRoutes(): Promise<void> {
    const res: any = await this.http.getPromiseData('fetch_rt_no', {
      accountId: 1000004,
      opsCd: this.currentState.operationUnit,
      rtTyp: this.currentState.routeType,
      dow: this.currentState.dayOfWeek,
    });
    this.currentState.selectedRoutes = [];
    if (res) {
      this.routes = [];
      const resp: IZRouteDataDOW[] = res;
      const asyncnode: IZRouteDataDOW[] = resp;
      this.navService.routesList = asyncnode;
      resp.forEach((e) => {
        this.routes.push({ routeNo: e.srvcOrdrRtNo, custCnt: e.custCnt });
      });
    }
    //api.qa.zignexlogistics.com/zexrp/fetch_rt_no?accountId=1000004&opsCd=SMT_COMM&rtTyp=FL&dow=MONDAY
    // return this.routesByDay[this.currentState.dayOfWeek] || [];
  }
  selectAll() {
    this.navService.updateSelectedRoutes(this.routes.map((e) => e.routeNo));
  }
  clearAll() {
    this.navService.updateSelectedRoutes([]);
  }
  loadData() {
    // This will sync sidebar state to map-grid and navigate
    this.navService.loadData();
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    //api.qa.zignexlogistics.com/zexrp/fetch_rt_no?accountId=1000004&opsCd=SMT_COMM&rtTyp=FL&dow=MONDAY
    this.destroy$.complete();
  }
}
