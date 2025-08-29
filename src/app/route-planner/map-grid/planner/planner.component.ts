import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { WjGridModule } from '@grapecity/wijmo.angular2.grid';
import { NavigationService } from '../../shared/services/navigation.service';
import { Subject, distinctUntilChanged, filter, takeUntil } from 'rxjs';
import { FlexGrid } from '@grapecity/wijmo.grid';
import { GridPopoutService } from '../../shared/services/grid-popout.service';
import { MapPoint } from '../../shared/interfaces/map-interfaces';
@Component({
  selector: 'app-planner',
  standalone: true,
  imports: [CommonModule, WjGridModule],
  templateUrl: './planner.component.html',
  styleUrl: './planner.component.scss',
})
export class PlannerComponent implements OnDestroy, OnInit, AfterViewInit {
  gridData: MapPoint[] = [];
  columns: any[] = [
    { binding: 'route', header: 'Route' },
    { binding: 'stop', header: 'Stop' },
    { binding: 'passengers', header: 'Passengers' },
    { binding: 'day', header: 'Day of Week' },
    { binding: 'lat', header: 'Latitude', isReadOnly: false, format: 'n6' }, // Editable
    { binding: 'lng', header: 'Longitude', isReadOnly: false, format: 'n6' }, // Editable
    { binding: 'color', header: 'Color' },
  ];
  dayOfWeek: string = '';
  routes: string[] = [];
  isNavigating: boolean = false;
  destroy$ = new Subject<void>();
  @ViewChild('flexGrid') flexGrid!: FlexGrid; // Reference to the Wijmo grid instance
  isBrowser: boolean = false;
  @Input() isPopoutMode: boolean = false; // Detect if running in popout mode
  constructor(
    private route: ActivatedRoute,
    public navService: NavigationService,
    public popoutService: GridPopoutService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      console.log(
        'planner mode',
        this.isPopoutMode,
        this.popoutService.isGridPoppedOut()
      );
      // Listen for map events from NavigationService (for map-to-grid updates)
      this.navService.mapEventSubject
        .pipe(takeUntil(this.destroy$))
        .subscribe((event) => {
          if (event.points) {
            this.updateGridDataFromMapPoints(event.points);
          }
        });
    }
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.popoutService.setGridPoppedOut(this.isPopoutMode);
      console.log(
        'planner mode',
        this.isPopoutMode,
        this.popoutService.isGridPoppedOut()
      );
      // Listen for grid data updates from popout
      this.popoutService.gridDataUpdated$
        .pipe(takeUntil(this.destroy$))
        .subscribe((points) => {
          console.log('Main grid: Received data from popout:', points);
          this.gridData = [...points];
          if (this.flexGrid) {
            this.flexGrid.refresh();
          }
          // Also update the map
          this.navService.mapEventSubject.next({ points: this.gridData });
        });
      // Listen for put grid back messages (only for main window)
      if (!this.isPopoutMode) {
        this.popoutService.putGridBack$
          .pipe(takeUntil(this.destroy$))
          .subscribe((data) => {
            console.log('Main grid: Grid put back with data:', data);
            if (data.points && data.points.length > 0) {
              this.gridData = [...data.points];
              this.setupFlexGridEvents();
              if (this.flexGrid) {
                this.flexGrid.refresh();
              }
            }
          });
        console.log('grid in main window planner');
        // Only subscribe to route params if NOT in popout mode
        this.route.params
          .pipe(
            distinctUntilChanged(),
            filter(() => !this.isNavigating),
            takeUntil(this.destroy$)
          )
          .subscribe((params) => {
            console.log(
              'main window code for grid is running',
              this.isPopoutMode
            );
            this.routes = params['routes'] ? params['routes'].split(',') : [];
            this.dayOfWeek = params['dayOfWeek'];
            this.updateGridDataAndMap();
            this.navService.updateMapGridState({
              selectedRoutes: this.routes,
              dayOfWeek: this.dayOfWeek,
            });
          });
      } else if (this.isPopoutMode) {
        this.popoutService.initializeGridData$
          .pipe(takeUntil(this.destroy$))
          .subscribe((points) => {
            console.log('PopoutGrid: Received initialization data:', points);
            this.updateGridDataFromMapPoints(points, true);
            // // Update navigation service with the received data
            // this.navService.mapEventSubject.next({ points });
          });
      }
    }
  }
  ngAfterViewInit() {
    if (this.isBrowser && this.flexGrid) {
      // Set up cell edit handler
      this.flexGrid.cellEditEnded.addHandler((s, e) => {
        const item = s.rows[e.row].dataItem;
        if (
          e.col === this.flexGrid.columns.getColumn('lat')?.index ||
          e.col === this.flexGrid.columns.getColumn('lng')?.index
        ) {
          item.lat = parseFloat(item.lat);
          item.lng = parseFloat(item.lng);
          if (!isNaN(item.lat) && !isNaN(item.lng)) {
            console.log('Grid cell edited:', item);
            this.updateMapWithGridChanges();
          }
        }
      });
    }
  }

  updateGridDataAndMap() {
    if (this.routes.length) {
      console.log(
        'getting insdide update Grud Data and map for the popin window'
      );
      // Generate data for new routes or if no data exists
      const newData = this.routes.map((route: string, idx: number) => {
        const existingItem = this.gridData.find((item) => item.route === route);
        if (existingItem) {
          return existingItem; // Keep existing data
        }
        return {
          route,
          stop: ['A', 'B', 'C'][Math.floor(Math.random() * 3)],
          day: this.dayOfWeek,
          passengers: Math.floor(Math.random() * 50),
          lat: 40.7128 + 0.01 * idx,
          lng: -74.006 + 0.01 * idx,
          color: 'red',
        };
      });
      this.gridData = newData;
      console.log(this.gridData);
      this.navService.mapEventSubject.next({ points: this.gridData });
    } else {
      this.gridData = [];
      this.navService.mapEventSubject.next({ points: [] });
    }
  }

  updateGridDataFromMapPoints(
    mapPoints: any[],
    initializedPopoutData: Boolean = false
  ) {
    if (mapPoints.length === 0) {
      this.gridData = [];
    } else if (initializedPopoutData) {
      this.gridData = [...mapPoints];
      this.popoutService.popoutGridData = this.gridData;
    } else {
      console.log('flex grid', this.flexGrid);
      const updatedPointsMap = new Map(mapPoints.map((p) => [p.route, p]));
      console.log(updatedPointsMap);
      this.gridData = this.gridData.map((row) => {
        const updatedPoint = updatedPointsMap.get(row.route);
        if (updatedPoint) {
          return {
            ...row,
            lat: updatedPoint.lat,
            lng: updatedPoint.lng,
            color: updatedPoint.color,
          };
        }
        return row;
      });
      console.log(this.gridData);
      this.popoutService.popoutGridData = this.gridData;
      // Refresh Wijmo grid after data update
      if (this.isBrowser && this.flexGrid) {
        this.flexGrid.refresh();
      }
    }
  }

  updateMapWithGridChanges() {
    console.log('Updating map with grid changes:', this.gridData);
    this.popoutService.popoutGridData = this.gridData;

    // Send to map in main window
    // Send the current grid data (which includes updated lat/lng) to the map
    this.navService.mapEventSubject.next({ points: this.gridData });
    // If in popout mode, send to main window
    if (this.isPopoutMode) {
      this.popoutService.sendMessage({
        type: 'gridDataUpdated',
        payload: { points: this.gridData },
      });
    } // If in main window and grid is popped out, send to popout
    else if (this.popoutService.isGridPoppedOut()) {
      this.popoutService.sendMessage({
        type: 'gridDataUpdated',
        payload: { points: this.gridData },
      });
    }
  }

  // Method to pop out the grid (only available in main window)
  popOutGrid() {
    if (
      !this.isBrowser ||
      this.isPopoutMode ||
      this.popoutService.isGridPoppedOut()
    )
      return;
    const sidebarState = this.navService.getCurrentMapGridState();
    const view = sidebarState.view;
    const routesParam = this.routes.length > 0 ? this.routes.join(',') : '';

    // Construct the popout URL
    const popoutUrl =
      this.dayOfWeek && routesParam
        ? `popout-grid/${view}/${this.dayOfWeek}/${routesParam}`
        : 'popout-grid';
    // Open new window with proper URL
    const newWindow = window.open(
      popoutUrl,
      'GridPopout',
      'width=1000,height=700'
    );
    if (newWindow) {
      this.popoutService.setGridPopoutWindow(newWindow);

      // Send current grid data to the popout window
      // We'll do this after a short delay to ensure the popout window is ready
      setTimeout(() => {
        this.popoutService.sendMessage({
          type: 'initializeGridData',
          payload: { points: this.gridData },
        });
      }, 1000);
      // Handle window close event
      const checkClosed = setInterval(() => {
        if (newWindow.closed) {
          clearInterval(checkClosed);
          this.popoutService.setGridPopoutWindow(null);
          console.log('Popout window was closed');
        }
      }, 1000);
    }
  }

  // putGridBack() {
  //   if (!this.isBrowser) return;
  //   const gridElement = this.popoutService.getGridComponentElement();
  //   const originalParent = this.popoutService.getGridOriginalParent();
  //   const popoutWindow = this.popoutService.getGridPopoutWindow();
  //   if (gridElement && originalParent) {
  //     // Append the grid component's native element back to its original parent
  //     originalParent.appendChild(gridElement);

  //     // 2. Show the grid in the main app again
  //     this.showGrid = true;

  //     // 3. Re-initialize/refresh the Wijmo grid after moving its DOM
  //     this.setupFlexGridEvents(); // Re-attach events if needed
  //     // Refresh the Wijmo grid
  //     if (this.flexGrid) {
  //       this.flexGrid.refresh();
  //     }
  //     // Clear pop-out state
  //     this.popoutService.setGridPopoutWindow(null);
  //     if (popoutWindow && !popoutWindow.closed) {
  //       popoutWindow.close();
  //     }
  //   }
  // }

  setupFlexGridEvents() {
    // Use a timeout to ensure flexGrid is rendered if showGrid was true
    setTimeout(() => {
      console.log(this.flexGrid);
      if (this.flexGrid) {
        this.flexGrid.cellEditEnded.addHandler((s, e) => {
          const item = s.rows[e.row].dataItem;
          if (
            e.col === this.flexGrid.columns.getColumn('lat')?.index ||
            e.col === this.flexGrid.columns.getColumn('lng')?.index
          ) {
            item.lat = parseFloat(item.lat);
            item.lng = parseFloat(item.lng);
            if (!isNaN(item.lat) && !isNaN(item.lng)) {
              this.updateMapWithGridChanges();
            }
          }
        });
      }
      console.log(this.flexGrid);
    }, 0); // Small timeout to ensure rendering
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
