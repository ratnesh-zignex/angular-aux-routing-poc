import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./route-planner/route-planner.module').then(
        (m) => m.RoutePlannerModule
      ),
  },
];
