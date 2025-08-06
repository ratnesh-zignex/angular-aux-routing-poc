import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WjGridModule } from '@grapecity/wijmo.angular2.grid';
import { DataSyncService } from '../data-sync.service';
@Component({
  selector: 'app-wijmo-grid',
  standalone: true,
  imports: [CommonModule, WjGridModule],
  templateUrl: './wijmo-grid.component.html',
  styleUrl: './wijmo-grid.component.scss',
})
export class WijmoGridComponent {
  gridData: any[] = [];
  columns: any[] = [
    { binding: 'route', header: 'Route' },
    { binding: 'stop', header: 'Stop' },
    { binding: 'passengers', header: 'Passengers' },
  ];

  constructor(
    private route: ActivatedRoute,
    private dataSync: DataSyncService
  ) {
    this.route.params.subscribe((params) => {
      console.log('route params wijmo grid', params);
      // Demo: create rows for each selected route
      const routes = params['routes'] ? params['routes'].split(',') : [];
      this.gridData = routes.map((route: string) => ({
        route,
        stop: ['A', 'B', 'C'][Math.floor(Math.random() * 3)],
        passengers: Math.floor(Math.random() * 50),
      }));
      const points = routes.map((route: string, idx: number) => ({
        route,
        lat: 40.7128 + 0.01 * idx,
        lng: -74.006 + 0.01 * idx,
        color: 'red',
      }));
      this.dataSync.setPoints(points);
      console.log(this.gridData, points);
    });
  }
}
