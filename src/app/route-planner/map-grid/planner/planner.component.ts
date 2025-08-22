import { Component, Inject, OnDestroy, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { WjGridModule } from '@grapecity/wijmo.angular2.grid';
import {
  MapPoint,
  NavigationService,
} from '../../shared/services/Navigation/navigation.service';
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
    { binding: 'lat', header: 'Latitude', format: 'n6' },
    { binding: 'lng', header: 'Longitude', format: 'n6' },
    { binding: 'color', header: 'Color' },
  ];
  dayOfWeek: string = '';
  routes: string[] = [];
  isNavigating: boolean = false;
  destroy$ = new Subject<void>();
  points: MapPoint[] = [];
  isBrowser: boolean = false;
  constructor(
    private route: ActivatedRoute,
    public navService: NavigationService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (isPlatformBrowser(this.platformId)) {
      this.setupRouteSubscription();
      this.setupMapEventSubscription();
    }
    // this.route.params
    //   .pipe(
    //     distinctUntilChanged(), // Only emit when params actually change
    //     filter(() => !this.isNavigating), // Prevent navigation during navigation
    //     takeUntil(this.destroy$)
    //   )
    //   .subscribe((params) => {
    //     this.routes = params['routes'] ? params['routes'].split(',') : [];
    //     this.dayOfWeek = params['dayOfWeek'];
    //     if (this.routes.length) {
    //       this.gridData = this.routes.map((route: string) => ({
    //         route,
    //         stop: ['A', 'B', 'C'][Math.floor(Math.random() * 3)],
    //         day: this.dayOfWeek,
    //         passengers: Math.floor(Math.random() * 50),
    //       }));
    //       const points = this.routes.map((route: string, idx: number) => ({
    //         route,
    //         lat: 40.7128 + 0.01 * idx,
    //         lng: -74.006 + 0.01 * idx,
    //         color: 'red',
    //       }));
    //       console.log(this.gridData, points);
    //       this.navService.mapEventSubject.next({ points: points });
    //     } else {
    //       // Clear grid and map when no routes
    //       this.gridData = [];
    //       this.navService.mapEventSubject.next({ points: [] });
    //     }
    //   });
  }

  setupRouteSubscription() {
    this.route.params
      .pipe(
        distinctUntilChanged(),
        filter(() => !this.isNavigating),
        takeUntil(this.destroy$)
      )
      .subscribe((params) => {
        this.routes = params['routes'] ? params['routes'].split(',') : [];
        this.dayOfWeek = params['dayOfWeek'];
        console.log(this.routes);
        if (this.routes.length) {
          this.points = this.generateInitialPoints(this.routes);
          this.updateGridData();
          console.log('Grid data: see reperated');
          this.sendPointsToMap();
        }
        this.navService.updateMapGridState({selectedRoutes: this.routes, dayOfWeek: this.dayOfWeek});
      });
  }
  private setupMapEventSubscription() {
    this.navService.mapEventSubject.subscribe((event) => {
      console.log('Grid received map event:', event);
      if (event.type === 'POINTS_UPDATED' && event.points) {
        this.points = event.points;
        this.updateGridData();
      } else if (event.payload) {
        this.points = event.payload.points;
        this.updateGridData();
      }
    });
  }
  private generateInitialPoints(routes: string[]): MapPoint[] {
    return routes.map((route: string, idx: number) => ({
      id: `point_${route}_${idx}`,
      route,
      day: this.dayOfWeek,
      stop: ['A', 'B', 'C'][Math.floor(Math.random() * 3)],
      passengers: Math.floor(Math.random() * 50),
      lat: 40.7128 + 0.01 * idx,
      lng: -74.006 + 0.01 * idx,
      color: 'red',
      originalLat: 40.7128 + 0.01 * idx,
      originalLng: -74.006 + 0.01 * idx,
    }));
  }

  private updateGridData() {
    this.gridData = this.points.map((point, idx) => ({
      route: point.route,
      stop: ['A', 'B', 'C'][Math.floor(Math.random() * 3)],
      day: this.dayOfWeek,
      passengers: Math.floor(Math.random() * 50),
      lat: Number(point.lat.toFixed(6)),
      lng: Number(point.lng.toFixed(6)),
      color: point.color,
      id: point.id,
      originalLat: 40.7128 + 0.01 * idx,
      originalLng: -74.006 + 0.01 * idx,
    }));

    console.log('Updated grid data:', this.gridData);
  }

  private sendPointsToMap() {
    this.navService.mapEventSubject.next({
      type: 'POINTS_UPDATED',
      points: this.points,
    });
  }

  private clearData() {
    console.log('clearing data');
    this.gridData = [];
    this.points = [];
    this.navService.mapEventSubject.next({ points: [] });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
