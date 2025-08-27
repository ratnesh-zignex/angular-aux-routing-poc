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
import { GridPopoutService } from '../../shared/services/grid-popout.service'; // Import the new service

@Component({
  selector: 'app-monthly-planner',
  standalone: true,
  imports: [CommonModule, WjGridModule],
  templateUrl: './monthly-planner.component.html',
  styleUrl: './monthly-planner.component.scss',
})
export class MonthlyPlannerComponent
  implements OnDestroy, OnInit, AfterViewInit
{
  gridData: any[] = [];
  columns: any[] = [
    { binding: 'route', header: 'Route' },
    { binding: 'stop', header: 'Stop' },
    { binding: 'passengers', header: 'Passengers' },
    { binding: 'day', header: 'Monthly' },
    { binding: 'lat', header: 'Latitude', isReadOnly: false },
    { binding: 'lng', header: 'Longitude', isReadOnly: false },
    { binding: 'color', header: 'Color' },
  ];
  dayOfWeek: string = '';
  routes: string[] = [];
  isNavigating: boolean = false;
  destroy$ = new Subject<void>();
  @ViewChild('flexGrid') flexGrid!: FlexGrid;
  isBrowser: boolean = false;

  constructor(
    private route: ActivatedRoute,
    public navService: NavigationService,
    public popoutService: GridPopoutService, // Use the new GridPopoutService
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      this.popoutService.setGridComponentElement(this.el.nativeElement);

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
        });

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
      this.popoutService.putGridBack$
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => {
          this.putGridBack();
        });
    }
  }

  ngAfterViewInit() {
    if (this.isBrowser) {
      if (!this.popoutService.getGridOriginalParent()) {
        this.popoutService.setGridOriginalParent(
          this.el.nativeElement.parentElement!
        );
      }

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
    }
  }

  private updateGridDataAndMap() {
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
      this.navService.updateMapGridState({
        selectedRoutes: this.routes,
        dayOfWeek: this.dayOfWeek,
      });
      this.navService.mapEventSubject.next({ points: this.gridData });
    } else {
      this.gridData = [];
      this.navService.mapEventSubject.next({ points: [] });
    }
  }

  private updateGridDataFromMapPoints(mapPoints: any[]) {
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
    if (this.isBrowser && this.flexGrid) {
      this.flexGrid.refresh();
    }
  }

  private updateMapWithGridChanges() {
    this.navService.mapEventSubject.next({ points: this.gridData });
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
      const newWindow = window.open('', '_blank', 'width=800,height=600');
      if (newWindow) {
        this.popoutService.setGridPopoutWindow(newWindow);

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

        const popoutContainer = newWindow.document.createElement('div');
        popoutContainer.id = 'popout-grid-container';
        popoutContainer.style.width = '100%';
        popoutContainer.style.height = 'calc(100% - 50px)';
        newWindow.document.body.appendChild(popoutContainer);

        const putBackButton = newWindow.document.createElement('button');
        putBackButton.textContent = 'Put Grid Back';
        putBackButton.style.cssText = `
          position: absolute;
          top: 10px;
          left: 10px;
          padding: 10px 20px;
          border: 1px solid #ccc;
          border-radius: 4px;
          background-color: #007bff;
          color: white;
          cursor: pointer;
          z-index: 1000;
        `;
        newWindow.document.body.appendChild(putBackButton);

        putBackButton.onclick = () => {
          this.putGridBack();
          newWindow.close();
        };

        popoutContainer.appendChild(gridElement);

        if (this.flexGrid) {
          this.flexGrid.refresh();
        }

        newWindow.onbeforeunload = () => {
          if (this.popoutService.isGridPoppedOut()) {
            this.putGridBack();
          }
        };
      }
    }
  }

  putGridBack() {
    if (!this.isBrowser) return;

    const gridElement = this.popoutService.getGridComponentElement();
    const originalParent = this.popoutService.getGridOriginalParent();
    const popoutWindow = this.popoutService.getGridPopoutWindow();

    if (gridElement && originalParent) {
      originalParent.appendChild(gridElement);

      if (this.flexGrid) {
        this.flexGrid.refresh();
      }

      this.popoutService.setGridPopoutWindow(null);
      if (popoutWindow && !popoutWindow.closed) {
        popoutWindow.close();
      }
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    if (this.isBrowser && this.popoutService.isGridPoppedOut()) {
      this.putGridBack();
    }
  }
}
