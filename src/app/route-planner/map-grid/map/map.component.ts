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
  MapPoint,
  NavigationService,
} from '../../shared/services/Navigation/navigation.service';
import { features } from 'process';
import {
  Subject,
  Subscription,
  distinctUntilChanged,
  filter,
  takeUntil,
} from 'rxjs';
import { MapPopoutServiceService } from '../../shared/services/mapPopout/map-popout-service.service';
import Select from 'ol/interaction/Select';
import Modify from 'ol/interaction/Modify';
import { click } from 'ol/events/condition';
import Stroke from 'ol/style/Stroke';
import { Geometry } from 'ol/geom';
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
  mapId: string = 'main'; // Default map ID, can be changed based on route params
  private subscriptions: Subscription = new Subscription();
  private vectorSource!: VectorSource;
  private selectInteraction!: Select;
  private modifyInteraction!: Modify;
  // Tool states
  isDragModeEnabled = false;
  isColorToolEnabled = false;
  unsavedChanges = false;
  isNavigating: boolean = false;
  destroy$ = new Subject<void>();
  constructor(
    private el: ElementRef,
    private route: ActivatedRoute,
    public navBar: NavigationService,
    private popoutService: MapPopoutServiceService,
    @Inject(PLATFORM_ID) private platformId: Object // Inject PLATFORM_ID
  ) {
    // this.route.params.subscribe((params) => {
    //   this.mapId = params['mapId'] || 'map1'; // Get map ID from URL or use default
    //   console.log('Map component route params:', params);
    //   this.navBar.updateMapGridState({ mapId: this.mapId });
    // });
    if (isPlatformBrowser(this.platformId)) this.setupSubscriptions();
    // this.navBar.mapEventSubject.subscribe((event) => {
    //   this.points = event.points || [];
    //   this.updateMapFeatures();
    // });
    // Listen to mapGridState changes from NavigationService
    // this.subscriptions.add(
    //   this.navBar.mapGridState$.subscribe((state: MapGridState) => {
    //     console.log('MapComponent (main) received mapGridState update:', state);
    //     this.mapId = state.mapId;
    //     // Re-generate points based on the selected routes from mapGridState
    //     console.log(this.points);
    //     this.points = this.generateDemoPoints(state.selectedRoutes);
    //     this.updateMapFeatures();
    //   })
    // );
    // Listen to incoming map state updates from the pop-out window
    // this.subscriptions.add(
    //   this.popoutService.mapStateUpdates$.subscribe((state) => {
    //     console.log(
    //       'MapComponent (main) received mapStateUpdate from pop-out:',
    //       state
    //     );
    //     // Update map based on pop-out's state
    //     this.mapId = state.mapId;
    //     this.points = this.generateDemoPoints(state.selectedRoutes);
    //     this.updateMapFeatures();
    //   })
    // );
  }
  private setupSubscriptions() {
    this.route.params
      .pipe(
        distinctUntilChanged(), // Only emit when params actually change
        filter(() => !this.isNavigating), // Prevent navigation during navigation
        takeUntil(this.destroy$)
      )
      .subscribe((params) => {
        this.mapId = params['mapId'] || 'map1'; // Get map ID from URL or use default
        console.log('Map component route params:', params);
        // this.navBar.updateMapGridState({ mapId: this.mapId });
      });
    // Listen to map events from navigation service
    this.subscriptions.add(
      this.navBar.mapEventSubject.subscribe((event) => {
        console.log('Map received event:', event);
        if (event.points) {
          this.points = this.ensurePointsHaveIds(event.points);
          this.updateMapFeatures();
        } else if (event.payload) {
          this.points = this.ensurePointsHaveIds(event.payload.points);
          this.updateMapFeatures();
        }
      })
    );

    // Listen to mapGridState changes
    this.subscriptions.add(
      this.navBar.mapGridState$.subscribe((state: MapGridState) => {
        console.log('Map received mapGridState update:', state);
        this.mapId = state.mapId;
        if (state.points) {
          this.points = state.points;
        } else {
          this.points = this.generateDemoPoints(state.selectedRoutes);
        }
        this.updateMapFeatures();
      })
    );

    // Listen to popout service messages
    this.subscriptions.add(
      this.popoutService.mapStateUpdates$.subscribe((state) => {
        console.log('Map received popout update:', state);
        if (state.points) {
          this.points = state.points;
          this.updateMapFeatures();
        }
      })
    );
  }

  ngOnInit() {}
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
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
  private initializeMap() {
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
  private setupMapInteractions() {
    // Select interaction for single clicks
    this.selectInteraction = new Select({
      condition: click,
      layers: [this.vectorLayer],
    });

    // Modify interaction for dragging
    this.modifyInteraction = new Modify({
      features: this.selectInteraction.getFeatures(),
    });

    // Add interactions to map
    this.map.addInteraction(this.selectInteraction);
    this.map.addInteraction(this.modifyInteraction);

    // Double-click to enable drag mode
    this.map.on('dblclick', (evt) => {
      evt.preventDefault();
      this.handleDoubleClick(evt);
    });

    // Listen for modify end (drag end)
    this.modifyInteraction.on('modifyend', (evt) => {
      this.handlePointDragEnd(evt);
    });

    // Single click for color change when color tool is enabled
    this.selectInteraction.on('select', (evt) => {
      if (this.isColorToolEnabled && evt.selected.length > 0) {
        this.handleColorChange(evt.selected[0]);
      }
    });
  }
  private getFeatureStyle(feature: Feature): Style {
    const pointData = feature.get('pointData') as MapPoint;
    const color = pointData?.color || 'red';
    const isSelected = this.selectInteraction
      ?.getFeatures()
      .getArray()
      .includes(feature);

    return new Style({
      image: new CircleStyle({
        radius: isSelected ? 10 : 7,
        fill: new Fill({ color: color }),
        stroke: new Stroke({
          color: isSelected ? '#000' : '#fff',
          width: isSelected ? 3 : 1,
        }),
      }),
    });
  }
  private handleDoubleClick(evt: any) {
    const feature: Feature<Geometry> = this.map.forEachFeatureAtPixel(
      evt.pixel,
      (f) => f
    ) as Feature<Geometry>;
    if (feature) {
      console.log('Double-clicked on point, enabling drag mode');
      this.selectInteraction.getFeatures().clear();
      this.selectInteraction.getFeatures().push(feature);
      this.isDragModeEnabled = true;

      // Visual feedback
      this.updateFeatureStyle(feature);

      // Auto-disable after 10 seconds
      setTimeout(() => {
        this.isDragModeEnabled = false;
        this.selectInteraction.getFeatures().clear();
        this.updateMapFeatures();
      }, 10000);
    }
  }
  private handlePointDragEnd(evt: any) {
    if (!this.isDragModeEnabled) return;

    const feature = evt.features.getArray()[0];
    const pointData = feature.get('pointData') as MapPoint;
    const geometry = feature.getGeometry() as Point;
    const newCoords = toLonLat(geometry.getCoordinates());

    console.log(`Point ${pointData.route} moved to:`, newCoords);

    // Update point data
    const updatedPoint: MapPoint = {
      ...pointData,
      lat: newCoords[1],
      lng: newCoords[0],
    };

    // Update local points array
    const pointIndex = this.points.findIndex((p) => p.id === pointData.id);
    if (pointIndex !== -1) {
      this.points[pointIndex] = updatedPoint;
      this.unsavedChanges = true;
    }

    // Broadcast change to other components
    this.broadcastPointUpdate('POINT_MOVED', {
      pointId: pointData.id,
      newPosition: { lat: newCoords[1], lng: newCoords[0] },
      points: this.points,
    });
    this.popoutService.sendPointMoved(
      pointData.id ?? '',
      {
        lat: newCoords[1],
        lng: newCoords[0],
      },
      this.points
    );
    this.isDragModeEnabled = false;
    this.selectInteraction.getFeatures().clear();
  }

  private handleColorChange(feature: Feature) {
    const pointData = feature.get('pointData') as MapPoint;
    const newColor = this.getRandomColor();

    console.log(`Changing color of point ${pointData.route} to ${newColor}`);

    // Update point data
    const updatedPoint: MapPoint = {
      ...pointData,
      color: newColor,
    };

    // Update local points array
    const pointIndex = this.points.findIndex((p) => p.id === pointData.id);
    if (pointIndex !== -1) {
      this.points[pointIndex] = updatedPoint;
      this.unsavedChanges = true;
    }

    // Update feature data and style
    feature.set('pointData', updatedPoint);
    feature.setStyle(this.getFeatureStyle(feature));

    // Broadcast change
    this.broadcastPointUpdate('POINT_COLOR_CHANGED', {
      pointId: pointData.id,
      newColor: newColor,
      points: this.points,
    });
    this.popoutService.sendColorChanged(
      pointData.id ?? '',
      newColor,
      this.points
    );

    // Clear selection
    this.selectInteraction.getFeatures().clear();
  }

  private broadcastPointUpdate(type: string, payload: any) {
    // Send to navigation service for grid updates
    this.navBar.mapEventSubject.next({
      type: 'POINTS_UPDATED',
      points: this.points,
    });

    // Send to popout window if open
    if (this.popoutService.isPopoutOpen()) {
      this.popoutService.sendMessage({
        type: 'mapEvent',
        payload: { type, payload },
      });
    }
  }
  updateMapFeatures() {
    if (!this.vectorSource) return;

    this.vectorSource.clear();
    this.points.forEach((point) => {
      const feature = new Feature({
        geometry: new Point(fromLonLat([point.lng, point.lat])),
        pointData: point,
      });

      feature.setStyle(this.getFeatureStyle(feature));
      this.vectorSource.addFeature(feature);
    });
  }
  private updateFeatureStyle(feature: Feature) {
    feature.setStyle(this.getFeatureStyle(feature));
  }

  private ensurePointsHaveIds(points: any[]): MapPoint[] {
    return points.map((point, index) => ({
      ...point,
      id: point.id || `point_${point.route}_${index}`,
      color: point.color || 'red',
      originalLat: point.originalLat || point.lat,
      originalLng: point.originalLng || point.lng,
    }));
  }
  // Helper to generate demo points (copied from PlannerComponent/PopoutMapComponent)
  generateDemoPoints(routes: string[]): MapPoint[] {
    return routes.map((route: string, idx: number) => ({
      id: `point_${route}_${idx}`,
      route,
      lat: 40.7128 + 0.01 * idx,
      lng: -74.006 + 0.01 * idx,
      color: 'red',
      originalLat: 40.7128 + 0.01 * idx,
      originalLng: -74.006 + 0.01 * idx,
    }));
  }
  getRandomColor(): string {
    const colors = [
      'red',
      'blue',
      'green',
      'yellow',
      'purple',
      'orange',
      'pink',
      'brown',
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }
  // Public methods for UI controls
  toggleColorTool() {
    this.isColorToolEnabled = !this.isColorToolEnabled;
    this.selectInteraction.getFeatures().clear();
    console.log(
      'Color tool:',
      this.isColorToolEnabled ? 'enabled' : 'disabled'
    );
  }
  saveChanges() {
    console.log('Saving changes...', this.points);
    this.unsavedChanges = false;

    // Broadcast save event
    this.broadcastPointUpdate('SAVE_CHANGES', {
      points: this.points,
    });

    // You can add API call here to persist changes
    alert('Changes saved successfully!');
  }
  resetChanges() {
    console.log('Resetting changes...');
    this.points = this.points.map((point) => ({
      ...point,
      lat: point.originalLat || point.lat,
      lng: point.originalLng || point.lng,
      color: 'red',
    }));

    this.updateMapFeatures();
    this.unsavedChanges = false;

    this.broadcastPointUpdate('POINTS_UPDATED', {
      points: this.points,
    });
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
    this.destroy$.next();
    this.destroy$.complete();
  }
}
