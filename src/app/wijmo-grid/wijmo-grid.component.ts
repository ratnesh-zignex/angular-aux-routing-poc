import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WjGridModule } from '@grapecity/wijmo.angular2.grid';
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

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      // Demo: create rows for each selected route
      const routes = params['routes'] ? params['routes'].split(','): [];
      this.gridData = routes.map((route: string) => ({
        route,
        stop: ['A', 'B', 'C'][Math.floor(Math.random() * 3)],
        passengers: Math.floor(Math.random() * 50),
      }));
      console.log(this.gridData);
    });
  }
}
