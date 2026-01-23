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
import { ActivatedRoute, Router } from '@angular/router';
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
import Text from 'ol/style/Text';
import {
  MapGridState,
  NavigationService,
} from '../../shared/services/navigation.service';
import { features } from 'process';
import { GridPopoutService } from '../../shared/services/grid-popout.service';
import { Subscription } from 'rxjs';
import Select from 'ol/interaction/Select';
import DragBox from 'ol/interaction/DragBox';
import { always } from 'ol/events/condition';
import Modify from 'ol/interaction/Modify';
import { MapEvent } from '../../shared/interfaces/map-interfaces';
import { Geometry, Polygon } from 'ol/geom';
import Stroke from 'ol/style/Stroke';
import { click } from 'ol/events/condition';
import { customer } from '../../../protos/customer/customer';
import { buffer } from 'ol/extent';
import { IZDailyCustomerDataType, IZMapSelectionData, IZToolType } from '../../shared/interfaces/interfaces';
import { MapToolbarComponent } from './toolbar/toolbar.component';
import { UrlStateService } from '../../shared/services/url-state.service';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule, MapToolbarComponent],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
})
export class MapComponent implements AfterViewInit, OnInit {
  points: IZDailyCustomerDataType[] = [];
  private map!: Map;
  private vectorLayer!: VectorLayer;
  mapId: string = 'map1'; // Default map ID, can be changed based on route params
  isBrowser: boolean = false;
  private subscriptions: Subscription = new Subscription();
  private vectorSource!: VectorSource;
  private selectInteraction!: Select;
  private modifyInteraction!: Modify;
  private dragBoxInteraction!: DragBox;
  private selectionSource!: VectorSource;
  private selectionLayer!: VectorLayer;
  isDragModeEnabled = false;
  isColorToolEnabled = false;
  isBoxSelectionEnabled = false;
  selectedIndices: Set<number> = new Set(); // Track selected feature indices

  unsavedChanges = false;
  labelField: string = 'cid'; // Default label field
  constructor(
    private el: ElementRef,
    private route: ActivatedRoute,
    private router: Router,
    public navBar: NavigationService,
    public popoutService: GridPopoutService,
    private urlStateService: UrlStateService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      this.setupSubscriptions();
    }
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
        this.updateMapFeatures();
        this.broadcastPointsUpdate();
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
          this.points = points.points;
          this.updateMapFeatures();
        }
      })
    );

    // ✅ Map <- Grid Sync: Listen for grid CIDs
    this.subscriptions.add(
      this.navBar.gridSelectionSubject.subscribe((cids: string[]) => {
        console.log('Map: Received grid selection CIDs:', cids?.length);
        
        // 1. Clear current map selection (visual)
        this.selectInteraction.getFeatures().clear();
        if (this.selectionSource) this.selectionSource.clear();

        if (cids && cids.length > 0) {
           const featuresToSelect: Feature<Geometry>[] = [];
           const cidSet = new Set(cids);

           // 2. Find matching features
           if (this.vectorSource) {
             this.vectorSource.getFeatures().forEach(feature => {
               const cid = feature.get('cid');
               if (cidSet.has(cid)) {
                 featuresToSelect.push(feature);
               }
             });
           }

           // 3. Highlight them
           featuresToSelect.forEach(f => this.selectInteraction.getFeatures().push(f));
        }
      })
    );
  }
  ngOnInit() {
    // ✅ Monitor URL matrix params for selection state (handles browser back/forward)
    let isFirstParamCheck = true;
    
    this.route.paramMap.subscribe((paramMap) => {
      const boxKey = paramMap.get('boxSelection');
      
      // ✅ Page refresh detection: On first check, if boxKey exists but no points loaded yet,
      // this is a page refresh - clear the param
      if (isFirstParamCheck && boxKey && this.points.length === 0) {
        isFirstParamCheck = false;
        console.log('Map: Page refresh detected with boxSelection param, clearing it');
        // Clear the selection param by navigating to clean map URL
        this.navBar.updateMapSelectionParam(this.urlStateService.saveSelection([]));
        return;
      }
      isFirstParamCheck = false;
      
      if (boxKey && this.points.length > 0) {
        // Restore selection from URL (browser back/forward navigation)
        console.log('Map: Restoring selection from key:', boxKey);
        const selectedCids = this.urlStateService.getSelection(boxKey);
        
        if (selectedCids && Array.isArray(selectedCids) && selectedCids.length > 0) {
          const cidSet = new Set(this.points.map(pt => pt.cid));
          const validCids = selectedCids.filter(cid => cidSet.has(cid));
          
          if (validCids.length > 0) {
            console.log(`Map: Restoring ${validCids.length} valid selections out of ${selectedCids.length}`);
            this.highlightFeaturesByCids(validCids);
          } else {
            console.warn('Map: No valid CIDs found in current data, skipping restoration');
          }
        } else {
          console.warn('Map: Invalid or empty selection data, skipping restoration');
        }
      } else if (!boxKey && this.points.length > 0) {
        // ✅ boxSelection param removed (e.g., browser back) - clear visual selection
        console.log('Map: boxSelection param removed, clearing selection');
        this.clearSelection();
      }
    });
  }
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

  updateMapFeatures(color?: string) {
    if (this.vectorSource === undefined) return;
    this.vectorSource.clear();
    this.points.forEach((pt) => {
      if (pt.lat && pt.lon) {
        const feature = new Feature({
          geometry: new Point(fromLonLat([pt.lon, pt.lat])),
          route: pt.rNo,
          color,
          cid: pt.cid,
          data: pt // Store full data for dynamic labeling
        });
        this.vectorSource.addFeature(feature);
      }
    });
    // ✅ Now fit the map view to all features
    if (this.vectorSource.getFeatures().length > 0) {
      const extent = this.vectorSource.getExtent();
      this.map.getView().fit(buffer(extent, 500), {
        size: this.map.getSize(),
        padding: [50, 50, 50, 50], // optional padding
        maxZoom: 18, // avoid zooming in too much
        duration: 500, // smooth animation
      });
    }
  }
  initializeMap(): void {
    this.vectorSource = new VectorSource();
    this.vectorLayer = new VectorLayer({
      source: this.vectorSource,
      style: (feature) => this.getFeatureStyle(feature as Feature<Geometry>),
    });

    // Initialize selection layer for persistent box
    this.selectionSource = new VectorSource();
    this.selectionLayer = new VectorLayer({
      source: this.selectionSource,
      style: new Style({
        fill: new Fill({
          color: 'rgba(0, 0, 255, 0.1)',
        }),
        stroke: new Stroke({
          color: '#0055ff',
          width: 2,
        }),
      }),
      zIndex: 100 
    });

    this.map = new Map({
      target: this.el.nativeElement.querySelector('#olmap'),
      layers: [
        new TileLayer({ source: new OSM() }), 
        this.vectorLayer,
        this.selectionLayer // Add selection layer
      ],
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
        evt.selected.length > 0
      ) {
        const feature = evt.selected[0];
        // 1. Handle Color Tool
        if (this.isColorToolEnabled) {
             this.handleColorChange(feature);
        }
        
        // 2. Broadcast Selection to Popout (Sync)
        const cid = feature.get('cid');
        const isPoppedOut = this.popoutService.isGridPoppedOut();
        console.log(`Map Selection Debug: CID=${cid}, isPoppedOut=${isPoppedOut}`);
        
        if (cid && isPoppedOut) {
             console.log('Map: Broadcasting selection to popout:', cid);
             this.popoutService.broadcastEvent('SYNC_SELECTION', { cid });
        } else {
             console.warn('Map: Selection NOT broadcast via bridge. Missing CID or Grid not popped out.');
        }
      }
    });
  }

  getFeatureStyle(feature: Feature<Geometry>): Style {
    const route = feature.get('route');
    const data = feature.get('data');
    const isSelected = data && this.selectedIndices.has(data.index);
    
    // Use gray color for selected features, original color for unselected
    const color = isSelected ? '#808080' : (feature.get('color') || this.getColorForRoute(route));
    const radius = isSelected ? 9 : 7; // Slightly larger for selected
    
    return new Style({
      image: new CircleStyle({
        radius: radius,
        fill: new Fill({ color: color }),
        stroke: new Stroke({
          color: isSelected ? '#333' : 'white',
          width: isSelected ? 2 : 1,
        }),
      }),
      text: new Text({
        text: this.getLabelText(feature),
        font: '12px Calibri,sans-serif',
        fill: new Fill({ color: '#000' }),
        stroke: new Stroke({
          color: '#fff',
          width: 2,
        }),
        offsetY: -15, // Move label above the point
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
        const cid = feature.get('cid');
        console.log(
          `Point ${cid} dragged to: Lat ${coords[1]}, Lng ${coords[0]}`
        );
        this.updatePointCoordinates(cid, coords[1], coords[0]);
        this.unsavedChanges = true;
        // Send only the updated customer
        const updatedCustomer = this.points.find(p => p.cid === cid);
        if (updatedCustomer) {
          this.broadcastSingleCustomerUpdate(updatedCustomer);
        }
      }
    }
    this.isDragModeEnabled = false;
    this.selectInteraction.getFeatures().clear();
  }

  handleColorChange(feature: Feature<Geometry>): void {
    const routeName = feature.get('route');
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    const point = this.points.find((p) => p.rNo === routeName);
    if (point) {
      // point.color = randomColor;
      this.updateMapFeatures(randomColor);
      this.unsavedChanges = true;
      // Send updated points to both main app and pop-out
      this.broadcastPointsUpdate();
    }
    this.selectInteraction.getFeatures().clear();
  }

  updatePointCoordinates(cid: string, lat: number, lng: number): void {
    const point = this.points.find((p) => p.cid === cid);
    if (point) {
      point.lat = lat;
      point.lon = lng;
    }
  }

  broadcastPointsUpdate(): void {
    // Send to main app grids
    this.navBar.mapEventSubject.next({ points: this.points });
    // Send to pop-out grids (if any)
    if (this.popoutService.isGridPoppedOut()) {
      console.log('sending message to Grid popped out');
      this.popoutService.sendMessage({
        type: 'EVENT',
        action: 'gridDataUpdated',
        payload: {
          points: this.points,
          state: { ...this.navBar.getCurrentMapGridState() },
        },
      });
    }
  }

  broadcastSingleCustomerUpdate(customer: IZDailyCustomerDataType): void {
    console.log('Broadcasting single customer update:', customer);
    // Send to main app grids
    this.navBar.mapEventSubject.next({ 
      singleCustomer: customer,
      points: this.points 
    });
    // Send to pop-out grids (if any)
    if (this.popoutService.isGridPoppedOut()) {
      this.popoutService.sendMessage({
        type: 'EVENT',
        action: 'gridDataUpdated',
        payload: {
          singleCustomer: customer,
          points: this.points,
          state: { ...this.navBar.getCurrentMapGridState() },
        },
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

  getColorForRoute(route: string | number): string {
    // Convert route to string
    const str = ((route as number) * 1000).toString();

    // Simple hash function → number
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }

    // Convert hash → hex color
    let color = '#';
    for (let i = 0; i < 3; i++) {
      const value = (hash >> (i * 8)) & 0xff;
      color += ('00' + value.toString(16)).slice(-2);
    }
    return color;
  }
  getLabelText(feature: Feature<Geometry>): string {
      const data = feature.get('data');
      if (data && this.labelField && data[this.labelField]) {
          return String(data[this.labelField]);
      }
      const cid = feature.get('cid');
      return cid ? String(cid) : '';
  }

  setLabelField(field: string) {
      this.labelField = field;
      this.updateMapFeatures();
  }

  // Rectangle Selection Tool Methods
  onToolActivated(toolType: IZToolType): void {
    console.log('Tool activated:', toolType);
    switch (toolType) {
      case IZToolType.BoxSelection:
        this.enableDragBox();
        break;
      case IZToolType.Eraser:
        this.clearSelection();
        break;
    }
  }

  onToolDeactivated(toolType: IZToolType): void {
    console.log('Tool deactivated:', toolType);
    switch (toolType) {
      case IZToolType.BoxSelection:
        this.disableDragBox();
        break;
    }
  }

  setupDragBoxInteraction(): void {
    this.dragBoxInteraction = new DragBox({
      condition: always, // Always allow drag (no modifier key needed)
    });

    this.dragBoxInteraction.on('boxend', () => {
      const geometry = this.dragBoxInteraction.getGeometry();
      const extent = geometry.getExtent();
      const newSelectedIndices: number[] = [];
      const newSelectedCids: string[] = [];

      // Find all features within the drawn rectangle
      this.vectorSource.forEachFeatureIntersectingExtent(extent, (feature) => {
        const data = feature.get('data');
        if (data) {
          if (data.index !== undefined) {
            newSelectedIndices.push(data.index);
          }
          if (data.cid) {
            newSelectedCids.push(data.cid);
          }
        }
      });

      console.log('Box selection completed. Selected indices:', newSelectedIndices, 'CIDs:', newSelectedCids);
      
      // Persist visual selection box
      if (this.selectionSource) {
         this.selectionSource.clear(); // Clear any previous box
         const selectionFeature = new Feature({
            geometry: geometry
         });
         this.selectionSource.addFeature(selectionFeature);
      }

      // Store selected indices and refresh map to show highlighting
      this.selectedIndices = new Set(newSelectedIndices);
      this.vectorLayer.changed(); // Trigger re-render to show selection styles

      // Emit selection event to grid components
      const selectionData: IZMapSelectionData = {
        toolType: IZToolType.BoxSelection,
        data: {
          selectedIndices: newSelectedIndices,
          selectedCids: newSelectedCids,
          allIndices: this.points.map((p) => p.index),
        },
      };

      this.navBar.mapSelectionSubject.next(selectionData);

      // ✅ Map -> Popout Sync: Broadcast selection
      if (this.popoutService && this.popoutService.isGridPoppedOut()) {
        this.popoutService.broadcastEvent('SYNC_SELECTION', {
           cids: newSelectedCids
        });
      }

      // ✅ URL Sync: Save selection and update URL matrix param
      if (newSelectedCids.length > 0) {
        const key = this.urlStateService.saveSelection(newSelectedCids);
        this.navBar.updateMapSelectionParam(key);
      }
    });
  }

  enableDragBox(): void {
    if (!this.dragBoxInteraction) {
      this.setupDragBoxInteraction();
    }
    this.isBoxSelectionEnabled = true;
    this.map.addInteraction(this.dragBoxInteraction);
    
    // Disable other interactions while box selection is active
    this.map.removeInteraction(this.selectInteraction);
    this.map.removeInteraction(this.modifyInteraction);
    
    console.log('DragBox interaction enabled');
  }

  disableDragBox(): void {
    this.isBoxSelectionEnabled = false;
    if (this.dragBoxInteraction) {
      this.map.removeInteraction(this.dragBoxInteraction);
    }
    
    // Re-enable other interactions
    this.map.addInteraction(this.selectInteraction);
    this.map.addInteraction(this.modifyInteraction);
    
    console.log('DragBox interaction disabled');
  }

  clearSelection(): void {
    // Clear selected indices and refresh map
    this.selectedIndices.clear();
    
    // Clear the persistent selection box
    if (this.selectionSource) {
      this.selectionSource.clear();
    }
    
    // ✅ CRITICAL: Clear interactions selection (blue highlight)
    if (this.selectInteraction) {
      this.selectInteraction.getFeatures().clear();
    }
    
    if (this.vectorLayer) {
      this.vectorLayer.changed();
    }
    
    // Emit empty selection to clear grid highlighting
    const selectionData: IZMapSelectionData = {
      toolType: IZToolType.Eraser,
      data: {
        selectedIndices: [],
      },
    };
    this.navBar.mapSelectionSubject.next(selectionData);
    
    // Map -> Popout Sync: Clear popout selection too
    if (this.popoutService && this.popoutService.isGridPoppedOut()) {
         this.popoutService.broadcastEvent('SYNC_SELECTION', { cids: [] });
    }

    console.log('Selection cleared');
    
    // ✅ Remove boxSelection param from URL entirely (don't create new empty key)
    const state = this.navBar.getCurrentMapGridState();
    const gridCommands: any[] = ['grid'];
    if (state.dayOfWeek) {
      gridCommands.push(state.dayOfWeek);
      const routesParam = state.selectedRoutes.length > 0 ? state.selectedRoutes.join(',') : '';
      if (routesParam) {
        gridCommands.push(routesParam);
      }
    }
    
    // Navigate to URL without boxSelection parameter
    this.router.navigate(
      [
        this.navBar.primaryRoute,
        {
          outlets: {
            mapgrid: [
              'mapgrid',
              state.view,
              {
                outlets: {
                  grid: gridCommands,
                  map: ['map', state.mapId], // No matrix param = removed
                },
              },
            ],
          },
        },
      ]
    );
  }

  // Helper to highlight features programmatically (used for restoring state)
  highlightFeaturesByCids(cids: string[]) {
     if (!this.vectorSource) return;

     this.selectInteraction.getFeatures().clear();
     const cidSet = new Set(cids);
     const indices: number[] = [];

     this.vectorSource.getFeatures().forEach(feature => {
         const cid = feature.get('cid');
         if (cidSet.has(cid)) {
             this.selectInteraction.getFeatures().push(feature);
             const data = feature.get('data');
             if (data && data.index !== undefined) {
                 indices.push(data.index);
             }
         }
     });
     
     this.selectedIndices = new Set(indices);
     this.vectorLayer.changed();
  }
}
