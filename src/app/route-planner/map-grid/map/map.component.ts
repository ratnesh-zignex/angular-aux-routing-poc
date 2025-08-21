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
import {
  MapGridState,
  NavigationService,
} from '../../shared/services/Navigation/navigation.service';
import { features } from 'process';
import { Subscription } from 'rxjs';
import { MapPopoutServiceService } from '../../shared/services/mapPopout/map-popout-service.service';
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
  private subscriptions: Subscription = new Subscription();
  constructor(
    private el: ElementRef,
    private route: ActivatedRoute,
    public navBar: NavigationService,
    private popoutService: MapPopoutServiceService
  ) {
    // this.route.params.subscribe((params) => {
    //   this.mapId = params['mapId'] || 'map1'; // Get map ID from URL or use default
    //   console.log('Map component route params:', params);
    //   this.navBar.updateMapGridState({ mapId: this.mapId });
    // });
    this.navBar.mapEventSubject.subscribe((event) => {
      this.points = event.points || [];
      this.updateMapFeatures();
    });
    // Listen to mapGridState changes from NavigationService
    this.subscriptions.add(
      this.navBar.mapGridState$.subscribe((state: MapGridState) => {
        console.log('MapComponent (main) received mapGridState update:', state);
        this.mapId = state.mapId;
        // Re-generate points based on the selected routes from mapGridState
        console.log(this.points);
        this.points = this.generateDemoPoints(state.selectedRoutes);
        this.updateMapFeatures();
      })
    );
    // Listen to incoming map state updates from the pop-out window
    this.subscriptions.add(
      this.popoutService.mapStateUpdates$.subscribe((state) => {
        console.log(
          'MapComponent (main) received mapStateUpdate from pop-out:',
          state
        );
        // Update map based on pop-out's state
        this.mapId = state.mapId;
        this.points = this.generateDemoPoints(state.selectedRoutes);
        this.updateMapFeatures();
      })
    );
  }

  ngOnInit() {}
  ngAfterViewInit() {
    this.vectorLayer = new VectorLayer({
      source: new VectorSource(),
      style: (feature) => {
        if (!feature.getGeometry()) return;
        return new Style({
          image: new CircleStyle({
            radius: 7,
            fill: new Fill({ color: 'red' }),
          }),
        });
      },
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

  updateMapFeatures() {
    const source = this.vectorLayer?.getSource();
    source?.clear();
    this.points.forEach((pt) => {
      const feature = new Feature({
        geometry: new Point(fromLonLat([pt.lng, pt.lat])),
      });
      source?.addFeature(feature);
    });
  }
  // Helper to generate demo points (copied from PlannerComponent/PopoutMapComponent)
  generateDemoPoints(routes: string[]): any[] {
    return routes.map((route: string, idx: number) => ({
      route,
      lat: 40.7128 + 0.01 * idx,
      lng: -74.006 + 0.01 * idx,
      color: 'red',
    }));
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
