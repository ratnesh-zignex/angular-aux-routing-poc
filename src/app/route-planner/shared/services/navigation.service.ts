import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

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
  constructor(private router: Router) {}
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
    this.router.navigate([
      `/${state.plannerType}`,
      {
        outlets: {
          sidebar: sidebarPath,
          mapgrid: mapgridPath,
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
    this.router.navigate([
      this.primaryRoute,
      {
        outlets: {
          sidebar: ['sidebar',currentState.operationUnit, currentState.routeType, currentState.dayOfWeek, currentState.tabName],
          mapgrid: mapgridPath,
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
    console.log('mapGird path', mapgridPath);
    this.router.navigate([
      `/${sidebarState.plannerType}`,
      {
        outlets: {
          sidebar: sidebarPath,
          mapgrid: mapgridPath,
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
  navigateToDefault(plannerType: string = "rp") {
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
}
