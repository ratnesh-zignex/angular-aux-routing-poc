import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Feature from 'ol/Feature';
import Map from 'ol/Map';
import View from 'ol/View';
import Point from 'ol/geom/Point';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import { fromLonLat } from 'ol/proj';
import OSM from 'ol/source/OSM';
import VectorSource from 'ol/source/Vector';
import CircleStyle from 'ol/style/Circle';
import Fill from 'ol/style/Fill';
import Style from 'ol/style/Style';
@Component({
  selector: 'app-openlayer-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './openlayer-map.component.html',
  styleUrl: './openlayer-map.component.scss',
})
export class OpenlayerMapComponent implements AfterViewInit, OnChanges {
  @Input() points: any[] = [];
  private map!: Map;
  private vectorLayer!: VectorLayer;

  constructor(private el: ElementRef, private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      console.log(params);
      const routes = params['routes'] ? params['routes'].split(',') : [];
      this.points = routes.map((route: string, idx: number) => ({
        route,
        lat: 40.7128 + 0.01 * idx,
        lng: -74.006 + 0.01 * idx,
        color: 'red',
      }));
      this.updateMapFeatures();
    });
  }

  ngOnInit() {}
  ngAfterViewInit() {
    this.vectorLayer = new VectorLayer({
      source: new VectorSource(),
      style: new Style({
        image: new CircleStyle({
          radius: 7,
          fill: new Fill({ color: 'red' }),
        }),
      }),
    });

    this.map = new Map({
      target: this.el.nativeElement.querySelector('#olmap'),
      layers: [new TileLayer({ source: new OSM() }), this.vectorLayer],
      view: new View({
        center: fromLonLat([-74.006, 40.7128]),
        zoom: 12,
      }),
    });
    this.updateMapFeatures();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['points'] && this.map) {
      this.updateMapFeatures();
    }
  }

  updateMapFeatures() {
    console.log('update map feature');
    const source = this.vectorLayer?.getSource();
    source?.clear();
    this.points.forEach((pt) => {
      const feature = new Feature({
        geometry: new Point(fromLonLat([pt.lng, pt.lat])),
      });
      source?.addFeature(feature);
    });
  }
}
