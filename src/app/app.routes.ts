import { Routes } from '@angular/router';
import { PopoutGridComponent } from './route-planner/popout-grid/popout-grid.component';

export const routes: Routes = [
  {
    path: 'popout-grid/:view/:dayOfWeek/:routes',
    component: PopoutGridComponent,
  },
  {
    path: 'popout-grid/:view/:dayOfWeek',
    component: PopoutGridComponent,
  },
  {
    path: 'popout-grid',
    component: PopoutGridComponent,
  },
  {
    path: '',
    loadChildren: () =>
      import('./route-planner/route-planner.module').then(
        (m) => m.RoutePlannerModule
      ),
  },
];
