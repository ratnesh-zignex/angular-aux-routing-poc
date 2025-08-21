import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { WjGridModule } from '@grapecity/wijmo.angular2.grid';
import { NavigationService } from '../../shared/services/navigation.service';
import { Subject, distinctUntilChanged, filter, takeUntil } from 'rxjs';
@Component({
  selector: 'app-planner',
  standalone: true,
  imports: [CommonModule, WjGridModule],
  templateUrl: './planner.component.html',
  styleUrl: './planner.component.scss',
})
export class PlannerComponent implements OnDestroy {
  gridData: any[] = [];
  columns: any[] = [
    { binding: 'route', header: 'Route' },
    { binding: 'stop', header: 'Stop' },
    { binding: 'passengers', header: 'Passengers' },
    { binding: 'day', header: 'Day of Week' },
  ];
  dayOfWeek: string = '';
  routes: string[] = [];
  isNavigating: boolean = false;
  destroy$ = new Subject<void>();
  constructor(
    private route: ActivatedRoute,
    public navService: NavigationService
  ) {
    this.route.params
      .pipe(
        distinctUntilChanged(), // Only emit when params actually change
        filter(() => !this.isNavigating), // Prevent navigation during navigation
        takeUntil(this.destroy$)
      )
      .subscribe((params) => {
        this.routes = params['routes'] ? params['routes'].split(',') : [];
        this.dayOfWeek = params['dayOfWeek'];
        if (this.routes.length) {
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
          console.log(this.gridData, points);
          this.navService.mapEventSubject.next({ points: points });
        } else {
          // Clear grid and map when no routes
          this.gridData = [];
          this.navService.mapEventSubject.next({ points: [] });
        }
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
