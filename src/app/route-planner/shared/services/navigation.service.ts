import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lowerCase } from 'lodash';
import { BehaviorSubject, Subject } from 'rxjs';
import {
  dummyOps, dummyRouteTypes, load1routes,
  load2Routes, loadData3Routes
} from '../interfaces/constant';
import {
  IZBaseDataType,
  IZDailyCustomerDataType,
  IZRouteDataDOW,
} from '../interfaces/interfaces';
import { HttpService } from './http.service';

export interface SidebarState {
  plannerType: string;
  operationUnit: string;
  routeType: string;
  dayOfWeek: string;
  tabName: string;
  selectedRoutes: string[];
}

export interface MapGridState {
  view: string;
  dayOfWeek: string;
  selectedRoutes: string[];
  mapId: string;
}

export interface IZOpsUnitData {
  dataFormat?: string;
  dataFormatCd?: string;
  opsUnitCd: string;
  opsUnitNm: string;
  srvcRtTypCd?: string[];
  name?: string;
  checked?: boolean;
}
export interface IZRouteTypeResponse {
  routeType: string;
  dow: string[];
  resiLite?: boolean;
  resiFlag: boolean;
  lob: string;
  lobDesc: string;
  rtTypColor: string;
  rtTypDesc: string;
}
@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  // private navigationState = new BehaviorSubject<NavigationState>({
  //   plannerType: 'rp',
  //   operationUnit: 'Comm',
  //   routeType: 'FL',
  //   dayOfWeek: 'Monday',
  //   tabName: 'routes',
  //   selectedRoutes: [],
  //   mapId: 'main',
  //   view: 'daily', // Default view
  // });
  // Separate states for sidebar and map-grid
  private sidebarState = new BehaviorSubject<SidebarState>({
    plannerType: '',
    operationUnit: '',
    routeType: '',
    dayOfWeek: '',
    tabName: '',
    selectedRoutes: [],
  });

  private mapGridState = new BehaviorSubject<MapGridState>({
    view: 'daily',
    dayOfWeek: '',
    selectedRoutes: [],
    mapId: 'main',
  });

  // Subject for triggering nested outlet updates in MapGridComponent
  private updateNestedOutletsSubject = new Subject<MapGridState | null>();
  public updateNestedOutletsRequest$ = this.updateNestedOutletsSubject.asObservable();
  // public navigationState$ = this.navigationState.asObservable();
  public sidebarState$ = this.sidebarState.asObservable();
  public mapGridState$ = this.mapGridState.asObservable();
  // Legacy properties for backward compatibility
  selectedDayOfWeek: string = '';
  selectedOperationUnit: string = '';
  selectedRouteType: string = '';
  selectedRoutes: string[] = [];
  primaryRoute: string = '/rp';
  mapEventSubject: Subject<any> = new Subject<any>(); // For map events
  appCode: string = '';
  operationUnitList: IZOpsUnitData[] = [];
  routeTypeList: IZRouteTypeResponse[] = [];
  dowList: string[] = [];
  routesList: IZRouteDataDOW[] = [];
  gridloadedData: IZDailyCustomerDataType[] = []; // we can replace this in future with loadedDaata Subject
  loadedDataSubject = new BehaviorSubject<IZDailyCustomerDataType[]>([]);
  loadedDataSubject$ = this.loadedDataSubject.asObservable();
  // private sidebarReadySubject = new BehaviorSubject<boolean>(false);
  // sidebarReady$ = this.sidebarReadySubject.asObservable();
  // // New properties for grid pop-out
  // private _gridPopoutWindow: Window | null = null;
  // private _gridOriginalParent: HTMLElement | null = null;
  // private _gridComponentElement: HTMLElement | null = null; // Reference to the grid's DOM element
  // private _isGridPoppedOut = new BehaviorSubject<boolean>(false);
  // isGridPoppedOut$ = this._isGridPoppedOut.asObservable();
  constructor(
    private router: Router,
    private httpService: HttpService,
    private route: ActivatedRoute,
  ) {
    this.route.params.subscribe((params) => {
      console.log('IN navigation', params);
    });
  }
  // getCurrentState(): NavigationState {
  //   return this.navigationState.value;
  // }
  getCurrentSidebarState(): SidebarState {
    return this.sidebarState.value;
  }
  getCurrentMapGridState(): MapGridState {
    return this.mapGridState.value;
  }
  updateSidebarState(updates: Partial<SidebarState>) {
    const currentState = this.getCurrentSidebarState();
    const newState = { ...currentState, ...updates };
    console.log('Updating sidebar state:', newState);
    if (updates.dayOfWeek && updates.dayOfWeek !== currentState.dayOfWeek) {
      newState.selectedRoutes = [];
      this.selectedRoutes = [];
    }
    this.sidebarState.next(newState);
    this.navigateSidebar(newState);
  }
  // Update only map-grid state
  updateMapGridState(updates: Partial<MapGridState>) {
    const currentState = this.getCurrentMapGridState();
    const newState = { ...currentState, ...updates };
    this.mapGridState.next(newState);
    this.navigateMapGrid(newState);
  }
  private navigateSidebar(state: SidebarState) {
    const mapGridState = this.getCurrentMapGridState();

    const sidebarPath = [
      'sidebar',
      state.operationUnit,
      state.routeType,
      state.dayOfWeek,
      state.tabName,
    ];

    // Simplified: Only specify top-level outlets
    const mapgridPath = ['mapgrid', mapGridState.view];

    this.router.navigate([
      `/${state.plannerType}`,
      {
        outlets: {
          sidebar: sidebarPath,
          mapgrid: mapgridPath  // No nested outlets!
        },
      },
    ]);

    // Trigger MapGridComponent to handle nested outlets via relative navigation
    if (mapGridState.dayOfWeek && mapGridState.selectedRoutes.length > 0) {
      setTimeout(() => {
        this.updateNestedOutletsSubject.next(mapGridState);
      }, 100);
    }
  }
  private navigateMapGrid(state: MapGridState) {
    const currentState = this.getCurrentSidebarState();

    // Simplified: Only specify top-level outlets
    const mapgridPath = ['mapgrid', state.view];

    const sidebarPath = [
      'sidebar',
      currentState.operationUnit,
      currentState.routeType,
      currentState.dayOfWeek,
      currentState.tabName,
    ];

    this.router.navigate([
      this.primaryRoute,
      {
        outlets: {
          sidebar: sidebarPath,  // Preserve sidebar
          mapgrid: mapgridPath   // No nested outlets!
        },
      },
    ]);

    // Trigger MapGridComponent to handle nested outlets via relative navigation
    if (state.dayOfWeek && state.selectedRoutes.length > 0) {
      setTimeout(() => {
        this.updateNestedOutletsSubject.next(state);
      }, 100);
    }
  }
  private navigateFull(sidebarState: SidebarState, mapGridState: MapGridState) {
    const sidebarPath = [
      'sidebar',
      sidebarState.operationUnit,
      sidebarState.routeType,
      sidebarState.dayOfWeek,
      sidebarState.tabName,
    ];

    // Simplified: Only specify top-level outlets
    const mapgridPath = ['mapgrid', mapGridState.view];

    console.log(
      'Navigate FUll function coming from Default',
      Boolean(mapGridState.dayOfWeek),
      mapGridState.dayOfWeek ? mapgridPath : [],
    );
    this.router.navigate([
      `/${sidebarState.plannerType}`,
      {
        outlets: {
          sidebar: sidebarPath,
          mapgrid: mapgridPath  // No nested outlets!
        },
      },
    ]);

    // Trigger MapGridComponent to handle nested outlets via relative navigation
    if (mapGridState.dayOfWeek && mapGridState.selectedRoutes.length > 0) {
      setTimeout(() => {
        this.updateNestedOutletsSubject.next(mapGridState);
      }, 150);  // Slightly longer timeout for full navigation
    }
  }

  private extractCurrentSidebarFromUrl(url: string): string[] {
    // Extract current sidebar path from URL
    const sidebarMatch = url.match(/sidebar:([^)]+)/);
    return sidebarMatch ? sidebarMatch[1].split('/') : [];
  }

  // Helper methods for common navigation patterns
  changePlannerType(type: 'rp' | 'mp' | 'sp') {
    this.updateSidebarState({ plannerType: type });
  }

  // Helper methods that only update sidebar state
  changeOperationUnit(unit: string) {
    this.selectedOperationUnit = unit;
    this.updateSidebarState({ operationUnit: unit });
  }

  changeRouteType(type: string) {
    this.selectedRouteType = type;
    this.updateSidebarState({ routeType: type });
  }

  changeDow(dayOfWeek: string) {
    this.selectedDayOfWeek = dayOfWeek;
    this.updateSidebarState({ dayOfWeek: dayOfWeek });
  }

  changeTab(tabName: string) {
    this.updateSidebarState({ tabName: tabName });
  }

  updateSelectedRoutes(routes: string[]) {
    this.selectedRoutes = routes;
    // this.updateSidebarState({ selectedRoutes: routes });
  }

  async loadData() {
    await this.getLoadedData();
    this.updateMapGridState({
      dayOfWeek: this.selectedDayOfWeek,
      selectedRoutes: this.selectedRoutes,
    });
    // this.syncStatesAndNavigate();
  }
  async navigateToDefault(plannerType: string = 'rp') {
    let res: IZOpsUnitData[] = [];
    // (await this.httpService.getPromiseData(
    //   'fetch_usr_ops',
    //   {
    //     usrId: 'karishma',
    //     accountId: 1000002,
    //     appName: this.appCode,
    //   }
    // )) as IZOpsUnitData[];
    console.log(res);
    if (!res.length) res = dummyOps;
    if (res.length) {
      this.operationUnitList = [];
      this.routeTypeList = [];
      res.forEach((e) => {
        if (e.srvcRtTypCd && e.srvcRtTypCd.length) {
          this.operationUnitList.push(e);
        }
      });
      if (this.operationUnitList[0]?.opsUnitCd) {
        await this.getRouteType(this.operationUnitList[0]?.opsUnitCd);
        // Get current states from NavigationService (which might have been initialized from URL)
        // Define default states if current ones are not fully populated or if we want to enforce defaults
        console.log(this.routeTypeList);
        const defaultSidebarState: SidebarState = {
          plannerType: lowerCase(this.appCode),
          operationUnit: this.operationUnitList[0].opsUnitCd,
          routeType: this.routeTypeList[0].routeType,
          dayOfWeek: this.routeTypeList[0].dow[0],
          tabName: 'routes',
          selectedRoutes: [], // Sidebar's selected routes (checkboxes)
        };
        const defaultMapGridState: MapGridState = {
          view: 'daily',
          dayOfWeek: '', // Map/Grid's dayOfWeek
          selectedRoutes: [], // Map/Grid's loaded routes
          mapId: 'main',
        };
        // This will trigger the navigateFull method in NavigationService
        this.navigateFull(defaultSidebarState, defaultMapGridState);
      }
    }
    // });
  }
  async getRouteType(opsUnitCd: string): Promise<void> {
    //api.qa.zignexlogistics.com/zexrp/getRtTypDowLob?accountId=1000004&opsCd=SMT_COMM
    try {
      let res: Record<string, IZRouteTypeResponse> = {};
      // await this.httpService.getPromiseData('getRtTypDowLob', {
      //   accountId: 1000002,
      //   opsCd: opsUnitCd,
      // });

      this.routeTypeList = [];
      this.selectedRouteType = '';
      this.dowList = [];
      res = dummyRouteTypes;
      if (res && Object.keys(res).length) {
        for (const i in res) {
          const curRes: IZRouteTypeResponse | undefined = res[i];
          if (curRes) {
            this.routeTypeList.push({
              ...curRes,
              routeType: i,
              resiLite: curRes.resiFlag,
            });
          }
        }
      } else {
        console.log('no route type - checking mock data');
        // Fallback to mock data
        const mockRes = dummyRouteTypes;
        for (const i in mockRes) {
           // @ts-ignore
           const curRes = mockRes[i] as IZRouteTypeResponse;
           if (curRes) {
            this.routeTypeList.push({
              ...curRes,
              routeType: i,
              resiLite: curRes.resiFlag,
            });
          }
        }
      }
    } catch (error) {
      console.error('Error fetching route type:', error);
    }
  }

  parseUrlForMapGridState(url: string): MapGridState {
    const defaultState: MapGridState = {
      view: 'daily',
      dayOfWeek: '',
      selectedRoutes: [],
      mapId: 'main',
    };

    try {
      const urlTree = this.router.parseUrl(url);
      const mapgridOutlet =
        urlTree.root.children['primary'].children['mapgrid'];

      if (!mapgridOutlet) return defaultState;

      // Extract view
      const view = mapgridOutlet.segments[1]?.path || 'daily';

      // Extract grid outlet
      const gridOutlet = mapgridOutlet.children['grid'];
      let dayOfWeek = '';
      let selectedRoutes: string[] = [];

      if (gridOutlet && gridOutlet.segments.length > 1) {
        dayOfWeek = gridOutlet.segments[1].path;
        if (gridOutlet.segments.length > 2) {
          selectedRoutes = gridOutlet.segments[2].path.split(',');
        }
      }

      // Extract map outlet
      const mapOutlet = mapgridOutlet.children['map'];
      let mapId = 'main';
      if (mapOutlet && mapOutlet.segments.length > 1) {
        mapId = mapOutlet.segments[1].path;
      }

      return {
        view,
        dayOfWeek,
        selectedRoutes,
        mapId,
      };
    } catch (error) {
      console.error('Error parsing URL for map grid state:', error);
      return defaultState;
    }
  }
  async getOpsUnit(): Promise<void> {
    let res: IZOpsUnitData[] = [];
    // (
    //   await this.httpService.getPromiseData('fetch_usr_ops', {
    //     usrId: 'karishma',
    //     accountId: 1000002,
    //     appName: this.appCode,
    //   }),
    // ) as IZOpsUnitData[];
    res = dummyOps;
    if (res.length) {
      this.operationUnitList = [];
      this.routeTypeList = [];
      res.forEach((e) => {
        if (e.srvcRtTypCd && e.srvcRtTypCd.length) {
          this.operationUnitList.push(e);
        }
      });
    }
  }

  async getLoadedData(
    isPopoutMode?: boolean,
    sendMapEventUpdate: boolean = true,
    state?: MapGridState & SidebarState,
  ) {
    let payload = {};
    if (isPopoutMode) {
      payload = {
        acctId: '1000002',
        opsUnitCd: state?.operationUnit,
        srvcRtTypCd: [state?.routeType],
        srvcOrdrRtDow: [state?.dayOfWeek],
        srvcOrdrRtNo: state?.selectedRoutes,
        userNm: 'karishma',
        lobCd: this.selectedRouteType === 'SL' ? 'R' : 'C',
      };
    } else {
      payload = {
        acctId: '1000002',
        opsUnitCd: this.selectedOperationUnit,
        srvcRtTypCd: [this.selectedRouteType],
        srvcOrdrRtDow: [this.selectedDayOfWeek],
        srvcOrdrRtNo: this.selectedRoutes,
        userNm: 'karishma',
        lobCd: this.selectedRouteType === 'SL' ? 'R' : 'C',
      };
    }
    //api.qa.zignexlogistics.com/zexrp/ftCstmr
    let res: IZDailyCustomerDataType[] = [];
    // await this.httpService.postPromiseData('ftCstmr', payload);

    if (!res.length) {
      if (this.selectedRoutes.length === 1) {
        res = load1routes;
      } else if (this.selectedRoutes.length == 2) {
        res = load2Routes;
      } else if (this.selectedRoutes.length > 2) {
        res = loadData3Routes;
      }
    }
    console.log('loaded data', res);
    // const loadedData = customer.CustomerResponse.decode(new Uint8Array(res))
    //   .customerArray as IZDailyCustomerDataType[];
    this.processingLoadedData<IZDailyCustomerDataType>(res);
    this.gridloadedData = res;
    // if (isPopoutMode) this.popoutService.popoutGridData = loadedData;
    if (sendMapEventUpdate) this.mapEventSubject.next({ points: res });
    console.log('decoded data', res);
  }

  processingLoadedData<T extends IZBaseDataType>(data: T[]): T[] {
    const y: T[] = data.map((x: T, i: number) => {
      x.index = i;
      return x;
    });
    return y;
  }
}
