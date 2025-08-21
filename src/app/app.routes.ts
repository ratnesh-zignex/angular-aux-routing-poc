import { Routes } from '@angular/router';
import { PopoutMapComponent } from './route-planner/map-grid/map/popout-map/popout-map.component';

export const routes: Routes = [
  // New route for the pop-out map
  {
    path: 'popout-map/:view/:mapId/:dayOfWeek', // Example: /popout-map/daily/main/Monday
    component: PopoutMapComponent,
  },
  {
    path: 'popout-map/:view/:mapId/:dayOfWeek/:routes', // With routes
    component: PopoutMapComponent,
  },
  {
    path: 'popout-map/:view/:mapId', // Without dayOfWeek or routes
    component: PopoutMapComponent,
  },
  {
    path: '',
    loadChildren: () =>
      import('./route-planner/route-planner.module').then(
        (m) => m.RoutePlannerModule
      ),
  }
];
