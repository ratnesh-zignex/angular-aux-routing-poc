import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutePlannerRoutingModule } from './route-planner-routing.module';
import { RoutePlannerComponent } from './route-planner.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { PlannerComponent } from './map-grid/planner/planner.component';
import { DpComponent } from './layout/sidebar/dp/dp.component';
import { MpComponent } from './layout/sidebar/mp/mp.component';
import { MonthlyPlannerComponent } from './map-grid/monthly-planner/monthly-planner.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [CommonModule, RoutePlannerRoutingModule, FormsModule],
  exports: [],
})
export class RoutePlannerModule {}
