import { Routes } from '@angular/router';
import { OpenlayerMapComponent } from './openlayer-map/openlayer-map.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WijmoGridComponent } from './wijmo-grid/wijmo-grid.component';

export const routes: Routes = [
    {
    path: '',
    redirectTo: '/rp',
    pathMatch: 'full'
  },
  {
    path: 'rp',
    children: [
      // Named outlets for sidebar and grid
      {
        path: '',
        children: [],
      },
      {
        path: 'sidebar/:operationUnit/:routeType/:dayOfWeek',
        component: SidebarComponent,
        outlet: 'sidebar'
      },
      {
        path: 'mapgrid/:view/:dayOfWeek/:route1/:route2',
        component: WijmoGridComponent,
        outlet: 'mapgrid'
      },
      // Add more named outlets as needed (e.g., for map)
    ]
  },
  {
    path: 'sp',
    // same setup for scenario planner
    children: []
  },
  {
    path: 'mp',
    // same setup for monthly planner
    children: []
  }
];
