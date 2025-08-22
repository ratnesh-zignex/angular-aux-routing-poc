import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { MapPopoutServiceService } from '../mapPopout/map-popout-service.service';
import { isPlatformBrowser } from '@angular/common';

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
  points?: MapPoint[]; // Add points to state
}
// Add this interface at the top of navigation.service.ts
export interface MapPoint {
  route: string;
  lat: number;
  lng: number;
  color: string;
  id?: string; // Add unique identifier
  originalLat?: number; // Store original position
  originalLng?: number;
  // Add grid-specific properties
  day?: string;
  stop?: string;
  passengers?: number;
}
// Add new message types for communication
export interface MapEventMessage {
  type:
    | 'POINT_MOVED'
    | 'POINT_COLOR_CHANGED'
    | 'POINTS_UPDATED'
    | 'SAVE_CHANGES';
  payload: {
    points?: MapPoint[];
    pointId?: string;
    newPosition?: { lat: number; lng: number };
    newColor?: string;
    route?: string;
  };
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
    plannerType: 'rp',
    operationUnit: 'Comm',
    routeType: 'FL',
    dayOfWeek: 'Monday',
    tabName: 'routes',
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
  selectedDayOfWeek: string = 'Monday';
  selectedOperationUnit: string = 'Comm';
  selectedRouteType: string = 'FL';
  selectedRoutes: string[] = [];
  primaryRoute: string = '/rp';
  mapEventSubject: Subject<any> = new Subject<any>(); // For map events
  constructor(
    private router: Router,
    private popoutService: MapPopoutServiceService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      // Subscribe to incoming messages from the pop-out window
      this.popoutService.mapStateUpdates$.subscribe((mapState) => {
        console.log(
          'NavService received mapStateUpdate from pop-out:',
          mapState
        );
        // Update internal mapGridState, but prevent re-triggering navigation if it came from pop-out
        this.mapGridState.next(mapState);
        // Also update legacy properties if needed
        this.selectedDayOfWeek = mapState.dayOfWeek;
        this.selectedRoutes = mapState.selectedRoutes;
        // Do NOT call navigateMapGrid here, as the pop-out already reflects this state.
        // The main app's mapgrid router outlet will update via its own subscriptions.
      });
      this.popoutService.sidebarStateUpdates$.subscribe((sidebarState) => {
        console.log(
          'NavService received sidebarStateUpdate from pop-out:',
          sidebarState
        );
        this.sidebarState.next(sidebarState);
        // Update legacy properties
        this.selectedOperationUnit = sidebarState.operationUnit;
        this.selectedRouteType = sidebarState.routeType;
        this.selectedDayOfWeek = sidebarState.dayOfWeek;
        // Do NOT call navigateSidebar here.
      });
      this.popoutService.mapEvents$.subscribe((event) => {
        console.log('NavService received mapEvent from pop-out:', event);
        this.mapEventSubject.next(event); // Forward map events to components that listen to it
      });
      // Subscribe to internal state changes and send them to pop-out if open
      this.sidebarState$.subscribe((state) => {
        if (this.popoutService.isPopoutOpen()) {
          this.popoutService.sendMessage({
            type: 'sidebarStateUpdate',
            payload: state,
          });
        }
      });
      this.mapGridState$.subscribe((state) => {
        if (this.popoutService.isPopoutOpen()) {
          this.popoutService.sendMessage({
            type: 'mapStateUpdate',
            payload: state,
          });
        }
      });
    }
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
    console.log(
      'NAVIGATIN SIDEBAR AND CHECKING MAP GRID STATE',
      this.parseUrlForMapGridState(this.router.url)
    );
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
      'mapGird path',
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
    console.log('Updating selected routes:', routes);
    this.selectedRoutes = routes;
    // this.updateSidebarState({ selectedRoutes: routes });
  }

  loadData() {
    this.updateMapGridState({
      dayOfWeek: this.selectedDayOfWeek,
      selectedRoutes: this.selectedRoutes,
    });
    // this.syncStatesAndNavigate();
  }
  navigateToDefault(plannerType: string = 'rp') {
    // Get current states from NavigationService (which might have been initialized from URL)
    // Define default states if current ones are not fully populated or if we want to enforce defaults
    const defaultSidebarState: SidebarState = {
      plannerType,
      operationUnit: 'Comm',
      routeType: 'FL',
      dayOfWeek: 'Monday',
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

  private parseUrlForMapGridState(url: string): MapGridState {
  const defaultState: MapGridState = {
    view: 'daily',
    dayOfWeek: '',
    selectedRoutes: [],
    mapId: 'main'
  };

  try {
    const urlTree = this.router.parseUrl(url);
    const mapgridOutlet = urlTree.root.children['primary'].children['mapgrid'];
    
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
      mapId
    };
  } catch (error) {
    console.error('Error parsing URL for map grid state:', error);
    return defaultState
  }
}
}
