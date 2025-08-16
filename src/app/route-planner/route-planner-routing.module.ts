import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutePlannerComponent } from './route-planner.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { DpComponent } from './layout/sidebar/dp/dp.component';
import { MpComponent } from './layout/sidebar/mp/mp.component';
import { MonthlyPlannerComponent } from './map-grid/monthly-planner/monthly-planner.component';

const routes: Routes = [
  {
    path: 'rp',
    component: RoutePlannerComponent,
    children: [
      {
        path: 'sidebar/:operationUnit/:routeType/:dayOfWeek',
        outlet: 'sidebar',
        loadComponent: () =>
          import('./layout/sidebar/sidebar.component').then(
            (m) => m.SidebarComponent
          ),
        children: [
          {
            path: ':tabName',
            loadComponent: () => 
              import('./layout/sidebar/dp/dp.component').then((m) => m.DpComponent), // Rp Sidebar
          }
        ],
      },

      // Nested auxiliary routes for map and grid
      {
        path: 'mapgrid/:view',
        outlet: 'mapgrid',
        loadComponent: () =>
          import('./map-grid/map-grid.component').then(
            (m) => m.MapGridComponent
          ),
        children: [
          {
            path: 'grid/:dayOfWeek/:routes',
            outlet: 'grid',
            loadComponent: () =>
              import('./map-grid/planner/planner.component').then(
                (m) => m.PlannerComponent
              ),
          },
          {
            path: 'map/:mapId',
            outlet: 'map',
            loadComponent: () =>
              import('./map-grid/map/map.component').then(
                (m) => m.MapComponent
              ),
          },
          {
            // ADD THIS: For when routes are empty
            path: 'grid/:dayOfWeek', // Matches 'grid/Monday'
            outlet: 'grid',
            loadComponent: () =>
              import('./map-grid/planner/planner.component').then(
                (m) => m.PlannerComponent
              ),
          },
          {
            // ADD THIS: For when dayOfWeek and routes are empty (e.g., initial state)
            path: 'grid', // Matches 'grid'
            outlet: 'grid',
            loadComponent: () =>
              import('./map-grid/planner/planner.component').then(
                (m) => m.PlannerComponent
              ),
          },
        ],
      },
    ],
  },
  {
    path: 'mp',
    children: [
      {
        path: 'sidebar/:operationUnit/:routeType/:dayOfWeek',
        outlet: 'sidebar',
        loadComponent: () =>
          import('./layout/sidebar/sidebar.component').then(
            (m) => m.SidebarComponent
          ),
        children: [
          {
            path: ':tabName',
            component: MpComponent,
          },
          {
            path: '',
            redirectTo: '/facility',
            pathMatch: 'full',
          },
        ],
      },
      // Map and Grid container
      {
        path: 'mapgrid/:view',
        outlet: 'mapgrid',
        loadComponent: () =>
          import('./map-grid/map-grid.component').then(
            (m) => m.MapGridComponent
          ),
        children: [
          // Grid component for MP
          {
            path: 'grid/:dayOfWeek/:routes',
            loadComponent: () =>
              import(
                './map-grid/monthly-planner/monthly-planner.component'
              ).then((m) => m.MonthlyPlannerComponent),
            outlet: 'grid',
          },
          // Map component (shared)
          {
            path: 'map/:mapId',
            outlet: 'map',
            loadComponent: () =>
              import('./map-grid/map/map.component').then(
                (m) => m.MapComponent
              ),
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutePlannerRoutingModule { }
