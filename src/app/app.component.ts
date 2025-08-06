import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
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
  constructor(
    private router: Router,
    private dataSync: DataSyncService,
    private route: ActivatedRoute
  ) {}
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
  }
}
