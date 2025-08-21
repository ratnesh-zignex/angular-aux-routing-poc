import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavigationService } from '../../shared/services/Navigation/navigation.service';
import { WjGridModule } from '@grapecity/wijmo.angular2.grid';

@Component({
  selector: 'app-monthly-planner',
  standalone: true,
  imports: [WjGridModule],
  templateUrl: './monthly-planner.component.html',
  styleUrl: './monthly-planner.component.scss',
})
export class MonthlyPlannerComponent {
  gridData: any[] = [];
  columns: any[] = [
    { binding: 'route', header: 'Route' },
    { binding: 'stop', header: 'Stop' },
    { binding: 'passengers', header: 'Passengers' },
    { binding: 'day', header: 'Monthly' },
  ];
  dayOfWeek: string = '';
  routes: string[] = [];
  constructor(
    private route: ActivatedRoute,
    public navService: NavigationService
  ) {
    this.route.params.subscribe((params) => {
      console.log('route params wijmo grid', params);
      // Demo: create rows for each selected route
      this.routes = params['routes'] ? params['routes'].split(',') : [];
      this.dayOfWeek = params['dayOfWeek'];

      this.gridData = this.routes.map((route: string) => ({
        route,
        stop: ['A', 'B', 'C'][Math.floor(Math.random() * 3)],
        day: this.dayOfWeek,
        passengers: Math.floor(Math.random() * 50),
      }));
      const points = this.routes.map((route: string, idx: number) => ({
        route,
        lat: 40.7128 + 0.01 * idx,
        lng: -74.006 + 0.01 * idx,
        color: 'red',
      }));
      this.navService.updateMapGridState({
        selectedRoutes: this.routes,
        dayOfWeek: this.dayOfWeek,
      });
      this.navService.mapEventSubject.next({ points: points });
    });
  }
}
