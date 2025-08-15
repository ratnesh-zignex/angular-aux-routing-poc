import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-map-grid',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './map-grid.component.html',
  styleUrl: './map-grid.component.scss'
})
export class MapGridComponent implements OnInit {
  showMapOnly = false;
  view: string = '';
  
  constructor(private route: ActivatedRoute) {}
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.view = params['view'];
    });
  }
}