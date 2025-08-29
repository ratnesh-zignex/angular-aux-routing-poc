import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  Input,
  OnChanges,
  OnInit,
  PLATFORM_ID,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Feature from 'ol/Feature';
import Map from 'ol/Map';
import View from 'ol/View';
import Point from 'ol/geom/Point';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import { fromLonLat, toLonLat } from 'ol/proj';
import OSM from 'ol/source/OSM';
import VectorSource from 'ol/source/Vector';
import CircleStyle from 'ol/style/Circle';
import Fill from 'ol/style/Fill';
import Style from 'ol/style/Style';
import {
  MapGridState,
  NavigationService,
} from '../../shared/services/navigation.service';
import { features } from 'process';
import { GridPopoutService } from '../../shared/services/grid-popout.service';
import { Subscription } from 'rxjs';
import Select from 'ol/interaction/Select';
import Modify from 'ol/interaction/Modify';
import { MapEvent, MapPoint } from '../../shared/interfaces/map-interfaces';
import { Geometry } from 'ol/geom';
import Stroke from 'ol/style/Stroke';
import { click } from 'ol/events/condition';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
})
export class MapComponent implements AfterViewInit, OnInit {
  points: MapPoint[] = [];
  private map!: Map;
  private vectorLayer!: VectorLayer;
  mapId: string = 'map1'; // Default map ID, can be changed based on route params
  isBrowser: boolean = false;
  private subscriptions: Subscription = new Subscription();
  private vectorSource!: VectorSource;
  private selectInteraction!: Select;
  private modifyInteraction!: Modify;
  isDragModeEnabled = false;
  isColorToolEnabled = false;
  unsavedChanges = false;
  constructor(
    private el: ElementRef,
    private route: ActivatedRoute,
    public navBar: NavigationService,
    public popoutService: GridPopoutService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      this.setupSubscriptions();
    }
    // this.route.params.subscribe((params) => {
    //   this.mapId = params['mapId'] || 'map1'; // Get map ID from URL or use default
    //   console.log('Map component route params:', params);
    //   this.navBar.updateMapGridState({ mapId: this.mapId });
    // });
    // this.navBar.mapEventSubject.subscribe((event) => {
    //   this.points = event.points || [];
    //   this.updateMapFeatures();
    // });
  }

  setupSubscriptions() {
    // ... (existing subscriptions)
    // Listen to mapEventSubject for points updates from grid components
    this.subscriptions.add(
      this.navBar.mapEventSubject.subscribe((event: MapEvent) => {
        console.log('Map received event:', event);

        // Simple approach: just replace the points array
        if (event.points) {
          this.points = [...event.points]; // Create a new array to avoid reference issues
        } else if (event.payload?.points) {
          this.points = [...event.payload.points];
        }

        this.updateMapFeatures();
      })
    );

    // Listen to mapGridState changes from NavigationService (main app)
    this.subscriptions.add(
      this.navBar.mapGridState$.subscribe((state: MapGridState) => {
        console.log('MapComponent received mapGridState update:', state);
        this.mapId = state.mapId;
        this.broadcastPointsUpdate()
        this.updateMapFeatures();
        // Only generate demo points if no points exist yet
        if (this.points.length === 0 && state.selectedRoutes.length > 0) {
          // this.points = this.generateDemoPoints(state.selectedRoutes);
          // this.updateMapFeatures();
        }
      })
    );
    // Listen for gridDataUpdated events from pop-out
    this.subscriptions.add(
      this.popoutService.gridDataUpdated$.subscribe((points) => {
        console.log(
          'MapComponent received gridDataUpdated from pop-out:',
          points
        );
        if (points) {
          // Update map points based on the grid's data
          this.points = points;
          this.updateMapFeatures();
        }
      })
    );
  }
  ngOnInit() {}
  ngAfterViewInit() {
    if (this.isBrowser) {
      this.initializeMap();
      this.setupMapInteractions();
    }
    // this.vectorLayer = new VectorLayer({
    //   source: new VectorSource(),
    //   style: (feature) => {
    //     if (!feature.getGeometry()) return;
    //     return new Style({
    //       image: new CircleStyle({
    //         radius: 7,
    //         fill: new Fill({ color: 'red' }),
    //       }),
    //     });
    //   },
    // });

    // this.map = new Map({
    //   target: this.el.nativeElement.querySelector('#olmap'),
    //   layers: [new TileLayer({ source: new OSM() }), this.vectorLayer],
    //   view: new View({
    //     center: fromLonLat([-74.006, 40.7128]),
    //     zoom: 12,
    //   }),
    // });
    // this.updateMapFeatures();
  }

  updateMapFeatures() {
    if (this.vectorSource === undefined) return;
    this.vectorSource.clear();
    this.points.forEach((pt) => {
      const feature = new Feature({
        geometry: new Point(fromLonLat([pt.lng, pt.lat])),
        route: pt.route,
        color: pt.color,
      });
      this.vectorSource.addFeature(feature);
    });
  }
  initializeMap(): void {
    this.vectorSource = new VectorSource();
    this.vectorLayer = new VectorLayer({
      source: this.vectorSource,
      style: (feature) => this.getFeatureStyle(feature as Feature<Geometry>),
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

  setupMapInteractions(): void {
    this.selectInteraction = new Select({
      condition: click,
      layers: [this.vectorLayer],
    });
    this.modifyInteraction = new Modify({
      features: this.selectInteraction.getFeatures(),
    });
    this.map.addInteraction(this.selectInteraction);
    this.map.addInteraction(this.modifyInteraction);
    this.map.on('dblclick', (evt) => {
      if (this.isBrowser) {
        evt.preventDefault();
        this.handleDoubleClick(evt);
      }
    });
    this.modifyInteraction.on('modifyend', (evt) => {
      if (this.isBrowser) {
        this.handlePointDragEnd(evt);
      }
    });
    this.selectInteraction.on('select', (evt) => {
      if (
        this.isBrowser &&
        this.isColorToolEnabled &&
        evt.selected.length > 0
      ) {
        this.handleColorChange(evt.selected[0]);
      }
    });
  }

  getFeatureStyle(feature: Feature<Geometry>): Style {
    const color = feature.get('color') || 'red';
    return new Style({
      image: new CircleStyle({
        radius: 7,
        fill: new Fill({ color: color }),
        stroke: new Stroke({
          color: 'white',
          width: 1,
        }),
      }),
    });
  }

  handleDoubleClick(evt: any): void {
    const feature = this.map.forEachFeatureAtPixel(evt.pixel, (f) => f);
    if (feature) {
      if (this.selectInteraction.getFeatures().getLength() > 0) {
        this.selectInteraction.getFeatures().clear();
      }
      this.selectInteraction.getFeatures().push(feature as Feature<Geometry>);
      this.isDragModeEnabled = true;
      console.log('Drag mode enabled for feature:', feature.get('route'));
    } else {
      this.isDragModeEnabled = false;
      this.selectInteraction.getFeatures().clear();
      console.log('Drag mode disabled.');
    }
  }

  handlePointDragEnd(evt: any): void {
    const feature = evt.features.getArray()[0];
    if (feature) {
      const geometry = feature.getGeometry();
      if (geometry instanceof Point) {
        const coords = toLonLat(geometry.getCoordinates());
        const routeName = feature.get('route');
        console.log(
          `Point ${routeName} dragged to: Lat ${coords[1]}, Lng ${coords[0]}`
        );
        this.updatePointCoordinates(routeName, coords[1], coords[0]);
        this.unsavedChanges = true;
        // Send updated points to both main app and pop-out
        this.broadcastPointsUpdate();
      }
    }
    this.isDragModeEnabled = false;
    this.selectInteraction.getFeatures().clear();
  }

  handleColorChange(feature: Feature<Geometry>): void {
    const routeName = feature.get('route');
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    const point = this.points.find((p) => p.route === routeName);
    if (point) {
      point.color = randomColor;
      this.updateMapFeatures();
      this.unsavedChanges = true;
      // Send updated points to both main app and pop-out
      this.broadcastPointsUpdate();
    }
    this.selectInteraction.getFeatures().clear();
  }

  updatePointCoordinates(routeName: string, lat: number, lng: number): void {
    const point = this.points.find((p) => p.route === routeName);
    if (point) {
      point.lat = lat;
      point.lng = lng;
    }
  }

  broadcastPointsUpdate(): void {
    // Send to main app grids
    this.navBar.mapEventSubject.next({ points: this.points });
    // Send to pop-out grids (if any)
    if (this.popoutService.isGridPoppedOut()) {
      console.log('sending message to Grid popped out');
      this.popoutService.sendMessage({
        type: 'gridDataUpdated',
        payload: { points: this.points },
      });
    }
  }
  // generateDemoPoints(routes: string[]): MapPoint[] {
  //   return routes.map((route: string, idx: number) => ({
  //     route,
  //     lat: 40.7128 + 0.01 * idx,
  //     lng: -74.006 + 0.01 * idx,
  //     color: 'red',
  //   }));
  // }
}
