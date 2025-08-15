import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

// export interface NavigationState {
//   view: string;
//   plannerType: 'rp' | 'mp' | 'sp';
//   operationUnit: string;
//   routeType: string;
//   dayOfWeek: string; // dayOfWeek or month
//   tabName: string;
//   selectedRoutes: string[];
//   mapId: string;
// }
export interface SidebarState {
  plannerType: 'rp' | 'mp' | 'sp';
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
    dayOfWeek: 'Monday',
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

  // updateState(updates: Partial<NavigationState>) {
  //   const currentState = this.getCurrentState();
  //   const newState = { ...currentState, ...updates };
  //   this.navigationState.next(newState);
  //   this.navigate(newState);
  // }
  // Update only sidebar state (doesn't trigger map-grid navigation)
  updateSidebarState(updates: Partial<SidebarState>) {
    const currentState = this.getCurrentSidebarState();
    const newState = { ...currentState, ...updates };
    console.log('Updating sidebar state:', newState);
    newState.selectedRoutes = [];
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
  // Navigate both sidebar and map-grid (called when "Load Data" is clicked)
  syncStatesAndNavigate() {
    const sidebarState = this.getCurrentSidebarState();
    const mapGridState = this.getCurrentMapGridState();

    // Sync map-grid state with sidebar selections
    const syncedMapGridState = {
      ...mapGridState,
      dayOfWeek: mapGridState.dayOfWeek,
      selectedRoutes: this.selectedRoutes,
    };

    this.mapGridState.next(syncedMapGridState);
    this.navigateFull(sidebarState, syncedMapGridState);
  }
  private navigateSidebar(state: SidebarState) {
    const currentUrl = this.router.url;
    const sidebarPath = `sidebar/${state.operationUnit}/${state.routeType}/${state.dayOfWeek}/${state.tabName}`;
     const mapGridPath = `mapgrid/${this.mapGridState.value.view}`;
         const routesParam =
           this.mapGridState.value.selectedRoutes.length > 0
             ? this.mapGridState.value.selectedRoutes.join(',')
             : '';
     const gridPath = `grid/${this.mapGridState.value.dayOfWeek}/${routesParam}`;
     const mapPath = `map/${this.mapGridState.value.mapId}`;

     this.router.navigate([
       `/${state.plannerType}`,
       {
         outlets: {
           sidebar: sidebarPath.split('/'),
           mapgrid: [
             ...mapGridPath.split('/'),
             {
               outlets: {
                 grid: gridPath.split('/'),
                 map: mapPath.split('/'),
               },
             },
           ],
         },
       },
     ]);
// console.log(this.extractCurrentMapGridFromUrl(currentUrl));
console.log(sidebarPath.split('/'));
    // // Only update sidebar outlet
    // this.router.navigate([
    //   `/${state.plannerType}`,
    //   {
    //     outlets: {
    //       sidebar: sidebarPath.split('/'),
    //       // Keep existing mapgrid outlet unchanged
    //       mapgrid: this.extractCurrentMapGridFromUrl(currentUrl),
    //     },
    //   },
    // ]);
  }
  private navigateMapGrid(state: MapGridState) {
    const currentUrl = this.router.url;
    const routesParam =
      state.selectedRoutes.length > 0 ? state.selectedRoutes.join(',') : '';
    const mapGridPath = `mapgrid/${state.view}`;
    console.log('grid',state.dayOfWeek, routesParam);
    const gridPath = state.dayOfWeek
      ? `grid/${state.dayOfWeek}/${routesParam}`
      : 'grid';
      //  `grid/${state.dayOfWeek}/${routesParam}`;
    const mapPath = `map/${state.mapId}`;
console.log('Navigating map grid with state:', gridPath);
    this.router.navigate([
      this.primaryRoute,
      {
        outlets: {
          sidebar: this.extractCurrentSidebarFromUrl(currentUrl),
          mapgrid: [
            ...mapGridPath.split('/'),
            {
              outlets: {
                grid: gridPath.split('/'),
                map: mapPath.split('/'),
              },
            },
          ],
        },
      },
    ]);
  }
  private navigateFull(sidebarState: SidebarState, mapGridState: MapGridState) {
    const routesParam =
      mapGridState.selectedRoutes.length > 0
        ? mapGridState.selectedRoutes.join(',')
        : '';
    const sidebarPath = `sidebar/${sidebarState.operationUnit}/${sidebarState.routeType}/${sidebarState.dayOfWeek}/${sidebarState.tabName}`;
    const mapGridPath = `mapgrid/${mapGridState.view}`;
    const gridPath = `grid/${mapGridState.dayOfWeek}/${routesParam}`;
    const mapPath = `map/${mapGridState.mapId}`;

    this.router.navigate([
      `/${sidebarState.plannerType}`,
      {
        outlets: {
          sidebar: sidebarPath.split('/'),
          mapgrid: [
            ...mapGridPath.split('/'),
            {
              outlets: {
                grid: gridPath.split('/'),
                map: mapPath.split('/'),
              },
            },
          ],
        },
      },
    ]);
  }

  private extractCurrentSidebarFromUrl(url: string): string[] {
    // Extract current sidebar path from URL
    const sidebarMatch = url.match(/sidebar:([^)]+)/);
    return sidebarMatch
      ? sidebarMatch[1].split('/')
      : ['sidebar', 'Comm', 'FL', 'Monday', 'routes'];
  }
  // private extractCurrentMapGridFromUrl(url: string): string[] {
  //   // Extract current mapgrid path from URL
  //   const mapGridMatch = url.match(/mapgrid:([^)]+)/);
  //   return mapGridMatch ? mapGridMatch[1].split('/') : ['mapgrid', 'daily'];
  // }

  // private navigate(state: NavigationState) {
  //   const routesParam =
  //     state.selectedRoutes.length > 0 ? state.selectedRoutes.join(',') : '';

  //   const sidebarPath = `sidebar/${state.operationUnit}/${state.routeType}/${state.dayOfWeek}/${state.tabName}`;
  //   const mapGridPath = `mapgrid/${state.view || 'daily'}`;
  //   const gridPath = `grid/${state.dayOfWeek}/${routesParam}`;
  //   const mapPath = `map/${state.mapId}`;

  //   // Build the complete navigation with all outlets
  //   this.router.navigate([
  //     `/${state.plannerType}`,
  //     {
  //       outlets: {
  //         sidebar: sidebarPath.split('/'),
  //         mapgrid: [
  //           ...mapGridPath.split('/'),
  //           {
  //             outlets: {
  //               grid: gridPath.split('/'),
  //               map: mapPath.split('/'),
  //             },
  //           },
  //         ],
  //       },
  //     },
  //   ]);
  // }

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
    this.updateMapGridState({dayOfWeek: this.selectedDayOfWeek, selectedRoutes: this.selectedRoutes});
    // this.syncStatesAndNavigate();
  }
}
