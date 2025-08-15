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
import { NavigationService } from '../../shared/services/navigation.service';
@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
})
export class MapComponent implements AfterViewInit, OnInit {
  points: any[] = [];
  private map!: Map;
  private vectorLayer!: VectorLayer;
  mapId: string = 'map1'; // Default map ID, can be changed based on route params
  constructor(
    private el: ElementRef,
    private route: ActivatedRoute,
    public navBar: NavigationService
  ) {
    this.route.params.subscribe((params) => {
      this.mapId = params['mapId'] || 'map1'; // Get map ID from URL or use default
      console.log('Map component route params:', params);
    });
    this.navBar.mapEventSubject.subscribe((event) => {
      console.log('Map event received:', event);
      this.points = event.points || [];
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

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log(changes, this.map);
  //   if (changes['points'] && this.map) {
  //     this.points = changes['points'].currentValue;
  //     this.updateMapFeatures();
  //   }
  // }

  updateMapFeatures() {
    console.log('update map feature', this.points);
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
