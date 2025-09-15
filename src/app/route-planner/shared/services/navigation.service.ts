import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, UrlTree } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { lowerCase } from 'lodash';
import { HttpService } from './http.service';
import { HttpErrorResponse } from '@angular/common/http';
import { IZRouteDataDOW } from '../interfaces/interfaces';
import { customer } from '../../../protos/customer/customer';

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
  gridloadedData: customer.ICustomer[] = [];
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
    private route: ActivatedRoute
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
    const currentUrl = this.router.parseUrl(this.router.url);
    const mapGridState = this.getCurrentMapGridState();
    console.log(mapGridState);
    // const currentMapGridSegment = this.extractCurrentMapGridSegment(currentUrl);
    console.log(currentUrl);
    const sidebarPath = [
      'sidebar',
      state.operationUnit,
      state.routeType,
      state.dayOfWeek,
      state.tabName,
    ];
    const routesParam =
      mapGridState.selectedRoutes.length > 0
        ? mapGridState.selectedRoutes.join(',')
        : '';
    const mapgridPath = [
      'mapgrid',
      mapGridState.view,
      {
        outlets: {
          grid: ['grid', mapGridState.dayOfWeek, routesParam],
          map: ['map', mapGridState.mapId],
        },
      },
    ];
    const initialMapGridPath = [
      'mapgrid',
      mapGridState.view,
      {
        outlets: {
          grid: ['grid'],
          map: ['map', mapGridState.mapId],
        },
      },
    ];
    this.router.navigate([
      `/${state.plannerType}`,
      {
        outlets: {
          sidebar: sidebarPath,
          mapgrid: mapGridState.dayOfWeek ? mapgridPath : initialMapGridPath,
        },
      },
    ]);
    console.log(sidebarPath, mapgridPath);
  }
  private navigateMapGrid(state: MapGridState) {
    const currentUrl = this.router.url;
    const currentState = this.getCurrentSidebarState();
    console.log(this.extractCurrentSidebarFromUrl(currentUrl));
    const routesParam =
      state.selectedRoutes.length > 0 ? state.selectedRoutes.join(',') : '';
    const mapgridPath = [
      'mapgrid',
      state.view,
      {
        outlets: {
          grid: ['grid', state.dayOfWeek, routesParam],
          map: ['map', state.mapId],
        },
      },
    ];
    const initialMapGridPath = [
      'mapgrid',
      state.view,
      {
        outlets: {
          grid: ['grid'],
          map: ['map', state.mapId],
        },
      },
    ];
    this.router.navigate([
      this.primaryRoute,
      {
        outlets: {
          sidebar: [
            'sidebar',
            currentState.operationUnit,
            currentState.routeType,
            currentState.dayOfWeek,
            currentState.tabName,
          ],
          mapgrid: state.dayOfWeek ? mapgridPath : initialMapGridPath,
        },
      },
    ]);
    console.log(this.extractCurrentSidebarFromUrl(currentUrl), mapgridPath);
  }
  private navigateFull(sidebarState: SidebarState, mapGridState: MapGridState) {
    const routesParam =
      mapGridState.selectedRoutes.length > 0
        ? mapGridState.selectedRoutes.join(',')
        : '';
    const sidebarPath = [
      'sidebar',
      sidebarState.operationUnit,
      sidebarState.routeType,
      sidebarState.dayOfWeek,
      sidebarState.tabName,
    ];
    const mapgridPath = [
      'mapgrid',
      mapGridState.view,
      {
        outlets: {
          grid: ['grid', mapGridState.dayOfWeek, routesParam],
          map: ['map', mapGridState.mapId],
        },
      },
    ];
    const initialMapGridPath = [
      'mapgrid',
      mapGridState.view,
      {
        outlets: {
          grid: ['grid'],
          map: ['map', mapGridState.mapId],
        },
      },
    ];

    console.log(
      'Navigate FUll function coming from Default',
      Boolean(mapGridState.dayOfWeek),
      mapGridState.dayOfWeek ? mapgridPath : initialMapGridPath
    );
    this.router.navigate([
      `/${sidebarState.plannerType}`,
      {
        outlets: {
          sidebar: sidebarPath,
          mapgrid: mapGridState.dayOfWeek ? mapgridPath : initialMapGridPath,
        },
      },
    ]);
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
    const res: IZOpsUnitData[] = (await this.httpService.getPromiseData(
      'fetch_usr_ops',
      {
        usrId: 'dev_login',
        accountId: 1000004,
        appName: this.appCode,
      }
    )) as IZOpsUnitData[];
    console.log(res);
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
      const res: Record<string, IZRouteTypeResponse> =
        await this.httpService.getPromiseData('getRtTypDowLob', {
          accountId: 1000004,
          opsCd: opsUnitCd,
        });

      this.routeTypeList = [];
      this.selectedRouteType = '';
      this.dowList = [];

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
        console.log('no route type');
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
    const res: IZOpsUnitData[] = (await this.httpService.getPromiseData(
      'fetch_usr_ops',
      {
        usrId: 'dev_login',
        accountId: 1000004,
        appName: this.appCode,
      }
    )) as IZOpsUnitData[];
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

  async getLoadedData() {
    const payload = {
      acctId: '1000004',
      opsUnitCd: this.selectedOperationUnit,
      srvcRtTypCd: [this.selectedRouteType],
      srvcOrdrRtDow: [this.selectedDayOfWeek],
      srvcOrdrRtNo: this.selectedRoutes,
      userNm: 'dev_login',
      lobCd: this.selectedRouteType === 'SL' ? 'R' : 'C',
    };
    //api.qa.zignexlogistics.com/zexrp/ftCstmr
    const res = await this.httpService.postPromiseData('ftCstmr', payload);

    console.log('loaded data', res);
    const loadedData = customer.CustomerResponse.decode(
      new Uint8Array(res)
    ).customerArray;
    this.gridloadedData = loadedData;
    this.mapEventSubject.next({ points: loadedData });
    console.log('decoded data', loadedData);
  }
}
