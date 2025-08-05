import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { OpenlayerMapComponent } from './openlayer-map/openlayer-map.component';
import { DataSyncService } from './data-sync.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OpenlayerMapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private dataSync: DataSyncService) {}
  mapPoints: any[] = [];

  ngOnInit() {
    // Only navig
    this.dataSync.points$.subscribe((points) => {
      this.mapPoints = points;
    });
    // Only navigate to sidebar if not already there
    if (!window.location.href.includes('(sidebar:')) {
      this.router.navigate([
        '/rp',
        {
          outlets: {
            sidebar: ['sidebar', 'Comm', 'FL', 'Monday'],
          },
        },
      ]);
    }
    this.router.routerState.root.children.forEach((child) => {
      child.children.forEach((outlet) => {
        if (outlet.outlet === 'mapgrid') {
          outlet.params.subscribe((params) => {
            const routes = params['routes'] ? params['routes'].split(',') : [];
            const day = params['dayOfWeek'];
            this.mapPoints = routes.map((route: string, idx: number) => ({
              route,
              lat: 40.7128 + 0.01 * idx,
              lng: -74.006 + 0.01 * idx,
              color: 'red',
            }));
          });
        }
      });
    });
  }
}
