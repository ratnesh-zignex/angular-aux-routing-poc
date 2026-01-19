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
import { ActivatedRoute, Router } from '@angular/router';
import { WjGridModule } from '@grapecity/wijmo.angular2.grid';
import { NavigationService } from '../../shared/services/navigation.service';
import {
  Subject,
  distinctUntilChanged,
  filter,
  takeUntil,
  lastValueFrom,
} from 'rxjs';
import { FlexGrid } from '@grapecity/wijmo.grid';
import { GridPopoutService } from '../../shared/services/grid-popout.service';
import { IZDailyCustomerDataType } from '../../shared/interfaces/interfaces';
import { state } from '@angular/animations';
import {
  IZWijmoGridBtn,
  IZGridBtnEnum,
  gridBtnList,
  popoutGridBtnList,
} from '../../shared/interfaces/grid-button.interface';
import { PopupService } from '../../shared/services/popup.service';
import { PopupManagerComponent } from '../../popup-manager/popup-manager.component';
import { HttpService } from '../../shared/services/http.service';
import { MapService } from '../../shared/services/map.service';

@Component({
  selector: 'app-planner',
  standalone: true,
  imports: [CommonModule, WjGridModule, PopupManagerComponent],
  templateUrl: './planner.component.html',
  styleUrl: './planner.component.scss',
})
export class PlannerComponent implements OnDestroy, OnInit, AfterViewInit {
  gridData: IZDailyCustomerDataType[] = [];
  // Grid toolbar buttons
  mainGridBtnList: IZWijmoGridBtn[] = gridBtnList;
  popoutGridBtnList: IZWijmoGridBtn[] = popoutGridBtnList;
  currentGridBtnList: IZWijmoGridBtn[] = [];

  columns: any[] = [
    {
      binding: 'cid',
      header: 'Customer #',
      width: 150,
      isReadOnly: true,
    },
    {
      binding: 'rNo',
      header: 'Route #',
      width: 80,
      isReadOnly: true,
    },
    {
      binding: 'addr',
      header: 'Address',
      width: '*',
      minWidth: 150,
      isReadOnly: true,
    },
    {
      binding: 'cty',
      header: 'City',
      width: 95,
      isReadOnly: true,
    },
    {
      binding: 'state',
      header: 'State',
      width: 67,
      isReadOnly: true,
    },
    {
      binding: 'lat',
      header: 'Latitude',
      width: 90,
      isReadOnly: false,
      format: 'n6',
    },
    {
      binding: 'lon',
      header: 'Longitude',
      width: 100,
      isReadOnly: false,
      format: 'n6',
    },
    // { binding: 'route', header: 'Route' },
    // { binding: 'stop', header: 'Stop' },
    // { binding: 'passengers', header: 'Passengers' },
    // { binding: 'day', header: 'Day of Week' },
    // { binding: 'lat', header: 'Latitude', isReadOnly: false, format: 'n6' }, // Editable
    // { binding: 'lng', header: 'Longitude', isReadOnly: false, format: 'n6' }, // Editable
    // { binding: 'color', header: 'Color' },
  ];
  dayOfWeek: string = '';
  routes: string[] = [];
  isNavigating: boolean = false;
  destroy$ = new Subject<void>();
  @ViewChild('flexGrid') flexGrid!: FlexGrid; // Reference to the Wijmo grid instance
  isBrowser: boolean = false;
  @Input() isPopoutMode: boolean = false; // Detect if running in popout mode
  private broadcastChannel: BroadcastChannel | null = null; // For popout communication

  constructor(
    private route: ActivatedRoute,
    private router: Router, // ✅ Added for self-navigation
    public navService: NavigationService,
    public popoutService: GridPopoutService,
    private popupService: PopupService,
    private httpService: HttpService,
    private mapService: MapService,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    // Set appropriate button list based on mode
    this.currentGridBtnList = this.isPopoutMode
      ? this.popoutGridBtnList
      : this.mainGridBtnList;

    if (this.isBrowser) {
      // Listen for map events from NavigationService (for map-to-grid updates)
      this.navService.mapEventSubject
        .pipe(takeUntil(this.destroy$))
        .subscribe((event) => {
          console.log('Planner: Received map event:', event);
          if (event.singleCustomer) {
            // Handle single customer update (more efficient)
            this.updateSingleCustomer(event.singleCustomer);
          } else if (event.points) {
            this.updateGridDataFromMapPoints(event.points);
          }
        });
    }
  }

  ngOnInit() {
    this.currentGridBtnList = this.isPopoutMode
      ? this.popoutGridBtnList
      : this.mainGridBtnList;
    if (this.isBrowser) {
      // Initialize listeners for popout mode (Map Selection Sync)
      if (this.isPopoutMode) {
        console.log(
          'Planner: Initializing Popout Listeners for SYNC_SELECTION',
        );
        this.popoutService
          .listenForEvent('SYNC_SELECTION')
          .pipe(takeUntil(this.destroy$))
          .subscribe((msg) => {
            console.log('Planner (Popout): Received SYNC_SELECTION:', msg);
            if (msg.payload && msg.payload.cid) {
              this.selectRowByCid(msg.payload.cid);
            } else {
              console.warn('Planner: Invalid payload for SYNC_SELECTION', msg);
            }
          });
      }

      // 1. Listen for Weekly Stats Requests
      this.popoutService
        .listenForRequest('GET_WEEKLY_STATS')
        .pipe(takeUntil(this.destroy$))
        .subscribe((msg) => {
          console.log('Planner: Received GET_WEEKLY_STATS request');
          const routeType = msg.payload?.routeType;
          // Call actual HTTP service
          // Assuming httpService.getPromiseResponse returns a Promise
          this.httpService
            .getPromiseData('getWeeklyStatistics', {
              requestParams: routeType,
            })
            .then((res: any) => {
              this.popoutService.sendResponse(msg.id!, res);
            })
            .catch((err: any) => {
              this.popoutService.sendResponse(msg.id!, null, err);
            });
        });

      // 2. Broadcast Map Colors
      this.mapService.colorBySubject
        .pipe(takeUntil(this.destroy$))
        .subscribe((colors) => {
          this.popoutService.broadcastEvent(
            'UPDATE_COLORS',
            colors.boundaryColor,
          );
        });

      // 3. Listen for Edit All Trigger (Local Event)
      this.popoutService.editAllTrigger$
        .pipe(takeUntil(this.destroy$))
        .subscribe((payload) => {
          this.handleEditAll(payload);
        });

      // 4. Listen for Remote Edit All Request (From Popout -> Main)
      this.popoutService
        .listenForRequest('REQUEST_EDIT_ALL')
        .pipe(takeUntil(this.destroy$))
        .subscribe((msg) => {
          console.log(
            'Planner (Main): Received REQUEST_EDIT_ALL:',
            msg.payload,
          );
          // Execute locally in Main Window
          this.handleEditAll(msg.payload, msg.id);
        });

      this.popoutService.setGridPoppedOut(this.isPopoutMode);
      // Listen for grid data updates from popout
      this.popoutService.gridDataUpdated$ // this will update the map as well and handle map update as well
        .pipe(takeUntil(this.destroy$))
        .subscribe((points) => {
          console.log('Main grid: Received data from popout:', points);
          this.gridData = [...points.points];
          if (this.flexGrid && typeof this.flexGrid.refresh === 'function') {
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
            this.setupFlexGridEvents();
            if (this.flexGrid && typeof this.flexGrid.refresh === 'function') {
              this.flexGrid.refresh();
            }
            this.navService.getLoadedData(false, false);
          });
        this.navService.loadedDataSubject$
          .pipe(takeUntil(this.destroy$))
          .subscribe((data: IZDailyCustomerDataType[]) => {
            this.popoutService.popoutGridData = data;
            if (this.flexGrid) this.gridData = data;
          });
        // Only subscribe to route params if NOT in popout mode
        this.route.params
          .pipe(
            distinctUntilChanged(),
            filter(() => !this.isNavigating),
            takeUntil(this.destroy$),
          )
          .subscribe((params) => {
            this.routes = params['routes'] ? params['routes'].split(',') : [];
            this.dayOfWeek = params['dayOfWeek'];
            this.updateGridDataAndMap();
            console.log(
              'Planner: Route params changed: Navigating to Map Grid state',
              params,
            );
            this.navService.updateMapGridState(
              {
                selectedRoutes: this.routes,
                dayOfWeek: this.dayOfWeek,
              },
              true,
            );
          });
      } else if (this.isPopoutMode) {
        console.log('PopoutGrid: In popout mode, waiting for data...');
        this.popoutService.initializeGridData$
          .pipe(takeUntil(this.destroy$))
          .subscribe((points) => {
            console.log('PopoutGrid: Received initialization data:', points);
            console.log('PopoutGrid: Points length:', points?.length);
            this.updateGridDataFromMapPoints(points, true);
            console.log('PopoutGrid: gridData after update:', this.gridData);
            // // Update navigation service with the received data
            // this.navService.mapEventSubject.next({ points });
          });
      }
    }
  }
  ngAfterViewInit() {
    if (this.isBrowser && this.flexGrid && this.flexGrid.cellEditEnded) {
      // Set up cell edit handler
      this.flexGrid.cellEditEnded.addHandler((s, e) => {
        const item = s.rows[e.row].dataItem;
        if (
          e.col === this.flexGrid.columns.getColumn('lat')?.index ||
          e.col === this.flexGrid.columns.getColumn('lon')?.index
        ) {
          item.lat = parseFloat(item.lat);
          item.lon = parseFloat(item.lon);
          if (!isNaN(item.lat) && !isNaN(item.lon)) {
            console.log('Grid cell edited:', item);
            this.updateMapWithGridChanges();
          }
        }
      });
    }
  }

  updateGridDataAndMap() {
    if (this.routes.length) {
      this.gridData = this.navService.gridloadedData;
      console.log(this.gridData);
      this.navService.mapEventSubject.next({ points: this.gridData });
    } else {
      this.gridData = [];
      this.navService.mapEventSubject.next({ points: [] });
    }
  }

  updateGridDataFromMapPoints(
    mapPoints: any[],
    initializedPopoutData: Boolean = false,
  ) {
    console.log('updateGridDataFromMapPoints called with:', mapPoints);
    if (mapPoints.length === 0) {
      this.gridData = [];
    } else if (initializedPopoutData) {
      this.gridData = [...mapPoints];
      this.popoutService.popoutGridData = this.gridData;
    } else {
      console.log('flex grid', this.flexGrid);
      const updatedPointsMap = new Map(mapPoints.map((p) => [p.cid, p]));
      console.log('Updated points map:', updatedPointsMap);
      this.gridData = this.gridData.map((row) => {
        const updatedPoint = updatedPointsMap.get(row.cid);
        if (updatedPoint) {
          return {
            ...row,
            lat: updatedPoint.lat,
            lon: updatedPoint.lon,
            color: updatedPoint.color,
          };
        }
        return row;
      });
      console.log('Updated grid data:', this.gridData);
      this.popoutService.popoutGridData = this.gridData;
      // Refresh Wijmo grid after data update
      if (
        this.isBrowser &&
        this.flexGrid &&
        typeof this.flexGrid.refresh === 'function'
      ) {
        console.log('Refreshing grid...');
        this.flexGrid.refresh();
      }
    }
  }

  updateSingleCustomer(customer: IZDailyCustomerDataType) {
    console.log('Updating single customer:', customer);
    const index = this.gridData.findIndex((row) => row.cid === customer.cid);
    if (index !== -1) {
      this.gridData[index] = {
        ...this.gridData[index],
        lat: customer.lat,
        lon: customer.lon,
      };
      console.log(`Updated customer ${customer.cid} at index ${index}`);
      this.popoutService.popoutGridData = this.gridData;
      // Refresh only the specific row in Wijmo grid
      if (
        this.isBrowser &&
        this.flexGrid &&
        this.flexGrid.collectionView &&
        typeof this.flexGrid.collectionView.refresh === 'function'
      ) {
        this.flexGrid.collectionView.refresh();
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
    // If in popout mode, send to main window
    if (this.isPopoutMode) {
      this.popoutService.sendMessage({
        type: 'EVENT',
        action: 'gridDataUpdated',
        payload: {
          points: this.gridData,
          state: this.navService.getCurrentMapGridState(),
        },
      });
    } // If in main window and grid is popped out, send to popout
    else if (this.popoutService.isGridPoppedOut()) {
      this.popoutService.sendMessage({
        type: 'EVENT',
        action: 'gridDataUpdated',
        payload: {
          points: this.gridData,
          state: this.navService.getCurrentMapGridState(),
        },
      });
    }
  }

  /**
   * ✅ FULLY ISOLATED NAVIGATION
   * Update ONLY this component's own route parameters without affecting ANY other components
   * Uses pure relative navigation - NO NavigationService involvement
   *
   * Benefits:
   * - Sidebar: UNTOUCHED ✅
   * - MapGrid: UNTOUCHED ✅
   * - Map: UNTOUCHED ✅
   * - URL: Only grid segment updates ✅
   *
   * @param newRoutes - Array of route numbers to navigate to
   */
  updateOwnRoutes(newRoutes: string[]): void {
    if (this.isPopoutMode) {
      console.log('PlannerComponent: Skipping self-navigation in popout mode');
      return;
    }

    console.log(
      '🎯 PlannerComponent: FULLY ISOLATED navigation - updating ONLY grid route parameter',
    );
    console.log('   Current routes:', this.routes);
    console.log('   New routes:', newRoutes);

    const routesParam = newRoutes.length > 0 ? newRoutes.join(',') : '';

    // ✅ KEY: Use RELATIVE navigation from grid's own route
    // Navigate: ../ (up to parent 'grid') / dayOfWeek / routes
    this.router.navigate(['../', this.dayOfWeek, routesParam], {
      relativeTo: this.route, // Navigate relative to: /rp/(mapgrid:mapgrid/daily/(grid:grid/<here>))
    });
    console.log(this.route);
    console.log(
      '🎯 URL will update to: grid/' + this.dayOfWeek + '/' + routesParam,
    );
    console.log('✅ Sidebar: NOT touched');
    console.log('✅ MapGrid: NOT touched');
    console.log('✅ Map: NOT touched');

    // Update local state (route.params subscription will also fire)
    this.routes = newRoutes;

    // Update NavigationService state (for other components that might care)
    // But this does NOT trigger navigation - just state sync
    this.navService.updateMapGridState({
      selectedRoutes: this.routes,
    });
  }

  // Method to pop out the grid (only available in main window)
  popOutGrid() {
    if (
      !this.isBrowser ||
      this.isPopoutMode ||
      this.popoutService.isGridPoppedOut()
    )
      return;

    console.log('popOutGrid called - current gridData:', this.gridData);
    console.log('Routes:', this.routes, 'DayOfWeek:', this.dayOfWeek);

    const sidebarState = this.navService.getCurrentMapGridState();
    const navSidebarState = this.navService.getCurrentSidebarState();
    const view = sidebarState.view;
    const routesParam = this.routes.length > 0 ? this.routes.join(',') : '';

    // Construct the popout URL
    const popoutUrl =
      this.dayOfWeek && routesParam
        ? `popout-grid/${view}/${this.dayOfWeek}/${routesParam}`
        : 'popout-grid';

    console.log('Opening popout with URL:', popoutUrl);

    // Open new window with proper URL
    const newWindow = window.open(
      popoutUrl,
      'GridPopout',
      'width=1000,height=700',
    );
    if (newWindow) {
      this.popoutService.setGridPopoutWindow(newWindow);

      // Send current grid data to the popout window
      // We'll do this after a short delay to ensure the popout window is ready
      setTimeout(() => {
        console.log('Sending data to popout:', this.gridData);
        // Get current colors from MapService if available
        let currentColors: any[] = [];
        // Note: We can't synchronously get the Subject value easily unless stored elsewhere
        // But we can trigger an update right after.

        this.popoutService.sendMessage({
          type: 'EVENT',
          action: 'initializeGridData',
          payload: {
            points: this.gridData,
            state: {
              ...this.navService.getCurrentMapGridState(),
              ...sidebarState,
            },
            popoutMode: true,
            popoutState: {
              plannerType: navSidebarState.plannerType,
              selectedOpsUnit: navSidebarState.operationUnit,
              selectedRouteType: navSidebarState.routeType,
              colors: [], // Will be updated via subscription shortly
            },
          },
        });

        // Trigger color update explicitly if possible
        // this.mapService.colorBySubject.pipe(take(1)).subscribe(...)
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

  /**
   * Handle toolbar button clicks
   */
  handleToolbarClick(btnId: IZGridBtnEnum): void {
    console.log('Toolbar button clicked:', btnId);

    switch (btnId) {
      case IZGridBtnEnum.Refresh:
        this.refreshGrid();
        break;
      case IZGridBtnEnum.Redisplay:
        this.redisplayOnMap();
        break;
      case IZGridBtnEnum.EnableMapFilter:
      case IZGridBtnEnum.DisableMapFilter:
        this.toggleMapFilter();
        break;
      case IZGridBtnEnum.Statistics:
        this.openStatistics();
        break;
      case IZGridBtnEnum.Calculator:
        this.openFieldCalculator();
        break;
      case IZGridBtnEnum.Geocode:
        this.openGeocodePopup();
        break;
      case IZGridBtnEnum.Delete:
        this.deleteSelectedRows();
        break;
      case IZGridBtnEnum.Export:
        this.exportGrid();
        break;
      case IZGridBtnEnum.RemoveFilter:
        this.removeFilters();
        break;
      case IZGridBtnEnum.PopoutGrid:
        this.popOutGrid();
        break;
      case IZGridBtnEnum.PutGridBack:
        this.putGridBack();
        break;
      case IZGridBtnEnum.EditAll:
        this.openEditAllPopup();
        break;
      default:
        console.warn('Unknown button action:', btnId);
    }
  }

  openEditAllPopup(): void {
    if (
      !this.flexGrid ||
      this.flexGrid.rows.filter((r) => r.isSelected).length === 0
    ) {
      alert('Please select at least one row to edit.');
      return;
    }
    this.popupService.openPopup('EditAll' as any, {});
  }

  /**
   * Refresh grid data
   */
  refreshGrid(): void {
    console.log('Refreshing grid...');
    this.navService.getLoadedData(false, false);
  }

  /**
   * Programmatically select a row by Customer ID (cid)
   */
  selectRowByCid(cid: string): void {
    if (!this.flexGrid) {
      console.warn('Planner: FlexGrid not ready for selection.');
      return;
    }

    console.log(
      `Planner: Attempting to select row for CID=${cid} among ${this.flexGrid.rows.length} rows`,
    );
    // Iterate over rows to find the matching customer
    for (const row of this.flexGrid.rows) {
      if (row.dataItem && row.dataItem.cid === cid) {
        console.log('Planner: Found matching row at index:', row.index);
        row.isSelected = true;
        this.flexGrid.scrollIntoView(row.index, 0); // Scroll to the selected row
        break;
      }
    }
  }

  /**
   * Redisplay selected customers on map
   */
  redisplayOnMap(): void {
    if (!this.flexGrid) return;

    const selectedRows = this.flexGrid.rows.filter((row) => row.isSelected);
    if (selectedRows.length === 0) {
      console.log('No rows selected for redisplay');
      return;
    }

    const selectedCustomers = selectedRows.map((row) => row.dataItem);
    console.log('Redisplaying customers on map:', selectedCustomers);

    // Send selected customers to map
    this.navService.mapEventSubject.next({ points: selectedCustomers });
  }

  /**
   * Toggle map filter
   */
  toggleMapFilter(): void {
    console.log('Toggling map filter...');
    // Implementation for map filter toggle
    // This would typically enable/disable filtering of map points based on grid selection
  }

  /**
   * Open statistics popup
   */
  openStatistics(): void {
    console.log('Opening statistics popup...');

    // Open statistics popup with grid data
    this.popupService.openPopup('statistics', {
      customers: this.gridData,
      routes: this.routes,
      dayOfWeek: this.dayOfWeek,
      operationUnit: '2027',
      routeType: 'CC',
    });
  }

  /**
   * Open field calculator popup
   */
  openFieldCalculator(): void {
    console.log('Opening field calculator...');
    // Check if any row is selected
    if (!this.flexGrid || this.flexGrid.selectedItems.length === 0) {
      // Show alert or toast
      alert('Please select at least one row from the grid.');
      return;
    }

    // Open field calculator popup
    this.popupService.openPopup('fieldCalculator' as any, {
      gridInstance: this.flexGrid, // Pass grid instance or data
    });
  }

  /**
   * Open geocode popup
   */
  openGeocodePopup(): void {
    if (!this.flexGrid) return;

    const selectedRows = this.flexGrid.rows.filter((row) => row.isSelected);
    const geocodeType = selectedRows.length > 0 ? 'Selected' : 'All';

    console.log(`Opening geocode popup for ${geocodeType} customers...`);

    // TODO: Implement geocode popup via broadcast channel
    if (this.isPopoutMode && this.broadcastChannel) {
      this.broadcastChannel.postMessage({
        type: 'OPEN_POPUP',
        payload: {
          popupType: 'geocode',
          data: {
            customers:
              geocodeType === 'Selected'
                ? selectedRows.map((row) => row.dataItem)
                : this.gridData,
            type: geocodeType,
          },
        },
      });
    }
  }

  /**
   * Delete selected rows
   */
  deleteSelectedRows(): void {
    if (!this.flexGrid) return;

    const selectedRows = this.flexGrid.rows.filter((row) => row.isSelected);
    if (selectedRows.length === 0) {
      console.log('No rows selected for deletion');
      return;
    }

    if (
      confirm(
        `Are you sure you want to delete ${selectedRows.length} customer(s)?`,
      )
    ) {
      const selectedCustomers = selectedRows.map((row) => row.dataItem);
      console.log('Deleting customers:', selectedCustomers);

      // Remove from grid data
      this.gridData = this.gridData.filter(
        (customer) => !selectedCustomers.find((sc) => sc.cid === customer.cid),
      );

      // Update map
      // Update map and sync across bridge
      this.updateMapWithGridChanges();

      // Refresh grid
      if (this.flexGrid && typeof this.flexGrid.refresh === 'function') {
        this.flexGrid.refresh();
      }
    }
  }

  /**
   * Export grid to Excel
   */
  exportGrid(): void {
    if (!this.flexGrid) return;

    console.log('Exporting grid to Excel...');

    const fileName = `customers_${this.dayOfWeek}_${new Date().getTime()}.xlsx`;

    // TODO: Install @grapecity/wijmo.grid.xlsx to enable Excel export
    // wjcGridXlsx.FlexGridXlsxConverter.saveAsync(
    //   this.flexGrid,
    //   {
    //     includeColumnHeaders: true,
    //     includeStyles: false
    //   },
    //   fileName
    // );

    // For now, export as CSV
    this.exportAsCSV(fileName.replace('.xlsx', '.csv'));
  }

  /**
   * Export grid data as CSV
   */
  private exportAsCSV(fileName: string): void {
    if (!this.gridData || this.gridData.length === 0) return;

    // Get column headers
    const headers = Object.keys(this.gridData[0]);

    // Create CSV content
    let csvContent = headers.join(',') + '\n';
    this.gridData.forEach((row) => {
      const values = headers.map((header) => {
        const value = (row as any)[header];
        return typeof value === 'string' && value.includes(',')
          ? `"${value}"`
          : value;
      });
      csvContent += values.join(',') + '\n';
    });

    // Create download link
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', fileName);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  /**
   * Remove all filters and sorting
   */
  removeFilters(): void {
    if (!this.flexGrid) return;

    console.log('Removing filters and sorting...');

    // Clear column filters if available
    // Note: columnFilters requires @grapecity/wijmo.grid.filter module
    try {
      const grid: any = this.flexGrid;
      if (grid.columnFilters) {
        grid.columnFilters.clear();
      }
    } catch (e) {
      console.log('Column filters not available');
    }

    // Clear sorting
    if (
      this.flexGrid &&
      this.flexGrid.collectionView &&
      this.flexGrid.collectionView.sortDescriptions
    ) {
      this.flexGrid.collectionView.sortDescriptions.clear();
    }
  }

  /**
   * Put grid back to parent window (from popout)
   */
  putGridBack(): void {
    if (!this.isPopoutMode) return;

    console.log('Putting grid back to parent window...');

    // Save current grid state
    const gridState = {
      data: this.gridData,
      columns: this.flexGrid?.columns.map((col) => ({
        binding: col.binding,
        header: col.header,
        width: col.width,
        visible: col.visible,
      })),
    };

    // Send message to parent window
    this.popoutService.sendMessage({
      type: 'EVENT',
      action: 'putGridBack',
      payload: {
        points: this.gridData,
        dayOfWeek: this.dayOfWeek,
        routes: this.routes,
      },
    });

    // Close window if in browser
    if (this.isBrowser && window.opener) {
      window.close();
    }
  }

  // Handles the actual API call (or proxies it to Main Window)
  // Handles the actual API call (or proxies it to Main Window)
  handleEditAll(payload: any, requestId?: string): void {
    // If we don't have a grid AND we don't have UIDs (from Popout), we can't do anything.
    if (!this.flexGrid && !payload.uids) {
      console.warn('Edit All: FlexGrid not available and no UIDs specificed.');
      return;
    }

    // If in Popout Mode, we MUST proxy this to Main Window because Popout lacks complete Navigation State (ops unit, etc.)
    if (this.isPopoutMode) {
      console.log(
        'Edit All (Popout): Proxying request to Main Window via Bridge...',
      );

      // Get selection from LOCAL grid (in Popout)
      const selectedRows = this.flexGrid.rows.filter((r) => r.isSelected);
      if (selectedRows.length === 0) {
        alert('Please select at least one row to edit.');
        return;
      }
      const uids = selectedRows.map((r) => ({ orId: r.dataItem.orId }));

      // Construct Payload with UIDs
      const proxyPayload = { ...payload, uids };

      // Send Request to Main Window
      // Note: REQUEST_EDIT_ALL expects Main to execute and reply.
      // We don't need to subscribe to response here other than for logging,
      // because Main will broadcast 'gridDataUpdated' which we listen to.
      this.popoutService
        .sendRequest('REQUEST_EDIT_ALL', proxyPayload)
        .subscribe({
          next: () =>
            console.log('Edit All (Popout): Main window processed request.'),
          error: (err) => {
            console.error('Edit All (Popout): Proxy failed', err);
            alert('Edit All Failed: ' + (err.message || 'Unknown Error'));
          },
        });
      return;
    }

    // --- MAIN WINDOW EXECUTION BELOW ---

    // If Payload has UIDs (from Popout), use them. Otherwise, use local selection.
    let uids = payload.uids;
    if (!uids) {
      const selectedRows = this.flexGrid.rows.filter((r) => r.isSelected);
      if (selectedRows.length === 0) {
        alert('Please select at least one row to edit.');
        return;
      }
      uids = selectedRows.map((r) => ({ orId: r.dataItem.orId }));
    }

    const apiPayload = {
      clKey: payload.clKey,
      clVal: payload.clVal,
      uids: uids,
      plannerType: this.popoutService.popoutState.plannerType || 'Daily',
      acctId: 1000004,
      opsUnitCd:
        this.popoutService.popoutState.selectedOpsUnit ||
        this.navService.selectedOperationUnit ||
        '',
      routeType:
        this.popoutService.popoutState.selectedRouteType ||
        this.navService.selectedRouteType ||
        '',
      dow: this.navService.selectedDayOfWeek || 'MONDAY',
      appName: 'RP',
      usrNm: 'dev_login',
    };

    console.log('Edit All: Sending API request', apiPayload);

    this.httpService.postDataText('updateCustomerData', apiPayload).subscribe({
      next: async () => {
        console.log('Edit All Success. Refreshing data...');

        // If this was a request from Popout, send success response
        if (requestId) {
          this.popoutService.sendResponse(requestId, 'SUCCESS');
        }

        // Refresh data (and update local map)
        await this.navService.getLoadedData(false, true);

        // If grid is popped out, explicitly broadcast the new data
        if (this.popoutService.isGridPoppedOut()) {
          const points = this.navService.gridloadedData;
          console.log(
            'PlannerComponent: Broadcasting refreshed data to Popout',
            points?.length,
          );
          this.popoutService.broadcastEvent('gridDataUpdated', { points });
        }
      },
      error: (err) => {
        console.error('Edit All Failed', err);
        if (requestId) {
          const safeError = { message: err.message || 'Unknown Error' };
          this.popoutService.sendResponse(requestId, null, safeError);
        }
        alert('Edit All Failed: ' + (err.message || 'Unknown Error'));
      },
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
