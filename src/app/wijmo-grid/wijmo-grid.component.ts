import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wijmo-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wijmo-grid.component.html',
  styleUrl: './wijmo-grid.component.scss',
})
export class WijmoGridComponent {
  params: any = {};
  gridData: any[] = [];

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.params = params;
      this.loadData(params);
    });
  }

  loadData(params: any) {
    // Dummy data for selected day/routes
    this.gridData = [
      {
        route: params.route1,
        stop: 'A',
        passengers: Math.floor(Math.random() * 50),
      },
      {
        route: params.route2,
        stop: 'B',
        passengers: Math.floor(Math.random() * 50),
      },
    ];
  }
}
