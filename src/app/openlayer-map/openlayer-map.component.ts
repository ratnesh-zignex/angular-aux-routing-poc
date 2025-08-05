import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-openlayer-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './openlayer-map.component.html',
  styleUrl: './openlayer-map.component.scss',
})
export class OpenlayerMapComponent {
  params: any = {};
  @Input() points: any[] = [];
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.params = params;
      this.loadMapData(params);
    });
  }

  loadMapData(params: any) {
    // Simulate map update based on params
    // Add OpenLayers logic here as needed
  }
}
