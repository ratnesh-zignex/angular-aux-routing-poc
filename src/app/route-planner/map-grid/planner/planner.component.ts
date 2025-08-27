import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
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
@Component({
  selector: 'app-planner',
  standalone: true,
  imports: [CommonModule, WjGridModule],
  templateUrl: './planner.component.html',
  styleUrl: './planner.component.scss',
})
export class PlannerComponent implements OnDestroy, OnInit, AfterViewInit {
  gridData: any[] = [];
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
  // Add a flag to control grid rendering
  showGrid: boolean = true; // Initially show the grid
  constructor(
    private route: ActivatedRoute,
    public navService: NavigationService,
    public popoutService: GridPopoutService,
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      this.popoutService.setGridComponentElement(this.el.nativeElement); // Store reference to this component's DOM element
      this.route.params
        .pipe(
          distinctUntilChanged(),
          filter(() => !this.isNavigating),
          takeUntil(this.destroy$)
        )
        .subscribe((params) => {
          this.routes = params['routes'] ? params['routes'].split(',') : [];
          this.dayOfWeek = params['dayOfWeek'];
          this.updateGridDataAndMap();
          this.navService.updateMapGridState({
            selectedRoutes: this.routes,
            dayOfWeek: this.dayOfWeek,
          });
        });
      this.navService.mapEventSubject
        .pipe(takeUntil(this.destroy$))
        .subscribe((event) => {
          if (event.points) {
            this.updateGridDataFromMapPoints(event.points);
          }
        });
    }
    // this.route.params
    //   .pipe(
    //     distinctUntilChanged(), // Only emit when params actually change
    //     filter(() => !this.isNavigating), // Prevent navigation during navigation
    //     takeUntil(this.destroy$)
    //   )
    //   .subscribe((params) => {
    //     this.routes = params['routes'] ? params['routes'].split(',') : [];
    //     this.dayOfWeek = params['dayOfWeek'];
    //     if (this.routes.length) {
    //       this.gridData = this.routes.map((route: string) => ({
    //         route,
    //         stop: ['A', 'B', 'C'][Math.floor(Math.random() * 3)],
    //         day: this.dayOfWeek,
    //         passengers: Math.floor(Math.random() * 50),
    //       }));
    //       const points = this.routes.map((route: string, idx: number) => ({
    //         route,
    //         lat: 40.7128 + 0.01 * idx,
    //         lng: -74.006 + 0.01 * idx,
    //         color: 'red',
    //       }));
    //       console.log(this.gridData, points);
    //       this.navService.mapEventSubject.next({ points: points });
    //     } else {
    //       // Clear grid and map when no routes
    //       this.gridData = [];
    //       this.navService.mapEventSubject.next({ points: [] });
    //     }
    //   });
  }

  ngOnInit() {
    if (this.isBrowser) {
      // Listen for messages from the pop-out window to put grid back
      this.popoutService.putGridBack$
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => {
          this.putGridBack();
        });
    }
  }
  ngAfterViewInit() {
    if (this.isBrowser) {
      // Store the original parent of the grid component
      // This is the parent of the <app-planner> tag, which is the router-outlet
      if (!this.popoutService.getGridOriginalParent()) {
        this.popoutService.setGridOriginalParent(
          this.el.nativeElement.parentElement!
        );
      }
      // Only set up event handler if flexGrid is available (i.e., not hidden)
      this.setupFlexGridEvents();
      // // Listen for cell edit events to update map
      // if (this.flexGrid) {
      //   this.flexGrid.cellEditEnded.addHandler((s, e) => {
      //     const item = s.rows[e.row].dataItem;
      //     if (
      //       e.col === this.flexGrid.columns.getColumn('lat')?.index ||
      //       e.col === this.flexGrid.columns.getColumn('lng')?.index
      //     ) {
      //       // Ensure lat/lng are numbers
      //       item.lat = parseFloat(item.lat);
      //       item.lng = parseFloat(item.lng);
      //       if (!isNaN(item.lat) && !isNaN(item.lng)) {
      //         this.updateMapWithGridChanges();
      //       }
      //     }
      //   });
      // }
    }
  }

  updateGridDataAndMap() {
    if (this.routes.length) {
      this.gridData = this.routes.map((route: string, idx: number) => ({
        route,
        stop: ['A', 'B', 'C'][Math.floor(Math.random() * 3)],
        day: this.dayOfWeek,
        passengers: Math.floor(Math.random() * 50),
        lat: 40.7128 + 0.01 * idx,
        lng: -74.006 + 0.01 * idx,
        color: 'red',
      }));
      this.navService.mapEventSubject.next({ points: this.gridData });
    } else {
      this.gridData = [];
      this.navService.mapEventSubject.next({ points: [] });
    }
  }

  updateGridDataFromMapPoints(mapPoints: any[]) {
    const updatedPointsMap = new Map(mapPoints.map((p) => [p.route, p]));
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
    // Refresh Wijmo grid after data update
    if (this.isBrowser && this.flexGrid) {
      this.flexGrid.refresh();
    }
  }

  updateMapWithGridChanges() {
    // Send the current grid data (which includes updated lat/lng) to the map
    this.navService.mapEventSubject.next({ points: this.gridData });
    // Also send to pop-out service if grid is popped out
    if (this.popoutService.isGridPoppedOut()) {
      this.popoutService.sendMessage({
        type: 'gridDataUpdated',
        payload: { points: this.gridData },
      });
    }
  }

  popOutGrid() {
    if (!this.isBrowser) return;
    const gridElement = this.popoutService.getGridComponentElement();
    const originalParent = this.popoutService.getGridOriginalParent();
    if (gridElement && originalParent) {
      // 1. Hide the grid in the main app immediately
      this.showGrid = false;
      // Create a new window
      const newWindow = window.open('', 'Grid', 'width=800,height=600');
      if (newWindow) {
        const mapGridState = this.navService.getCurrentMapGridState();
        this.popoutService.setGridPopoutWindow(newWindow);
        newWindow.document.title = `Grid Popout - ${mapGridState.view}_${mapGridState.dayOfWeek}_${mapGridState.selectedRoutes}`;
        // Copy styles from the main document to the new window
        const styleSheets = Array.from(document.styleSheets);
        styleSheets.forEach((sheet) => {
          try {
            const style = newWindow.document.createElement('style');
            style.textContent = Array.from(sheet.cssRules)
              .map((rule) => rule.cssText)
              .join('\n');
            newWindow.document.head.appendChild(style);
          } catch (e) {
            console.warn('Could not copy stylesheet:', e);
          }
        });
        // Create a container div in the new window's body
        const popoutContainer = newWindow.document.createElement('div');
        popoutContainer.id = 'popout-grid-container';
        popoutContainer.style.display = 'flex';
        popoutContainer.style.flexDirection = 'column';
        popoutContainer.style.height = '100%'; // Leave space for button
        newWindow.document.body.appendChild(popoutContainer);

        // Create a div for controls (including the put back button)
        const controlsDiv = newWindow.document.createElement('div');
        controlsDiv.style.padding = '10px';
        controlsDiv.style.backgroundColor = '#f0f0f0';
        controlsDiv.style.borderBottom = '1px solid #ccc';
        controlsDiv.style.display = 'flex'; // Use flexbox for controls
        controlsDiv.style.justifyContent = 'flex-start'; // Align button to start
        // Create a button to put the grid back
        const putBackButton = newWindow.document.createElement('button');
        putBackButton.textContent = 'Put Grid Back';
        putBackButton.style.cssText = `
          padding: 8px 15px;
          border: 1px solid #007bff;
          border-radius: 4px;
          background-color: #007bff;
          color: white;
          cursor: pointer;
          font-size: 14px;
        `;
        controlsDiv.appendChild(putBackButton); // Append button to controlsDiv
        // newWindow.document.body.appendChild(putBackButton);
        // Append controlsDiv to popoutContainer
        popoutContainer.appendChild(controlsDiv);

        // Create a div to hold the grid itself
        const gridWrapper = newWindow.document.createElement('div');
        gridWrapper.style.flexGrow = '1'; // Make grid take remaining space
        gridWrapper.style.overflow = 'auto'; // Add scroll if content overflows
        popoutContainer.appendChild(gridWrapper); // Append gridWrapper to popoutContainer

        putBackButton.onclick = () => {
          this.putGridBack();
          newWindow.close(); // Close the pop-out window
        };

        // Append the grid component's native element to the gridWrapper
        gridWrapper.appendChild(gridElement);

        // 3. Re-initialize/refresh the Wijmo grid after moving its DOM
        // This is crucial for it to re-establish its internal DOM references
        this.setupFlexGridEvents(); // Re-attach events if needed
        // // Append the grid component's native element to the new window's container
        // popoutContainer.appendChild(gridElement);
        // Refresh the Wijmo grid to ensure it renders correctly in the new context
        if (this.flexGrid) {
          this.flexGrid.refresh();
        }
        // Handle window close event
        newWindow.onbeforeunload = () => {
          // If the user closes the window manually, put the grid back
          if (this.popoutService.isGridPoppedOut()) {
            this.putGridBack();
          }
          // Important: Send a message back to the main app to clear its state
          // if the pop-out is closed by the user directly (e.g., browser tab close)
          this.popoutService.sendMessage({ type: 'putGridBack' });
        };
      }
    } else {
      // If window.open fails (e.g., pop-up blocker), show grid again
      this.showGrid = true;
    }
  }

  putGridBack() {
    if (!this.isBrowser) return;
    const gridElement = this.popoutService.getGridComponentElement();
    const originalParent = this.popoutService.getGridOriginalParent();
    const popoutWindow = this.popoutService.getGridPopoutWindow();
    if (gridElement && originalParent) {
      // Append the grid component's native element back to its original parent
      originalParent.appendChild(gridElement);

      // 2. Show the grid in the main app again
      this.showGrid = true;

      // 3. Re-initialize/refresh the Wijmo grid after moving its DOM
      this.setupFlexGridEvents(); // Re-attach events if needed
      // Refresh the Wijmo grid
      if (this.flexGrid) {
        this.flexGrid.refresh();
      }
      // Clear pop-out state
      this.popoutService.setGridPopoutWindow(null);
      if (popoutWindow && !popoutWindow.closed) {
        popoutWindow.close();
      }
    }
  }

  setupFlexGridEvents() {
    // Use a timeout to ensure flexGrid is rendered if showGrid was true
    setTimeout(() => {
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
    }, 0); // Small timeout to ensure rendering
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    if (this.isBrowser) {
      // If the main app is destroyed while grid is popped out, put it back
      // This ensures the DOM element is returned before the component is fully destroyed.
      if (this.popoutService.isGridPoppedOut()) this.putGridBack();

      // Also, explicitly tell the popout service that the grid component is gone
      // This helps prevent issues if the popout window tries to send messages
      // to a non-existent component.
      this.popoutService.setGridComponentElement(null);
      this.popoutService.setGridOriginalParent(null);
    }
  }
}
