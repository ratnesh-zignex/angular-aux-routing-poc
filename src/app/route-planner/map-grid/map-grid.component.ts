import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { NavigationService } from '../shared/services/Navigation/navigation.service';
import { Subject, distinctUntilChanged, filter, takeUntil } from 'rxjs';

@Component({
  selector: 'app-map-grid',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './map-grid.component.html',
  styleUrl: './map-grid.component.scss',
})
export class MapGridComponent implements OnInit {
  showMapOnly = false;
  view: string = '';
  isNavigating: boolean = false;
  destroy$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private navService: NavigationService
  ) {}

  ngOnInit() {
    this.route.params
      .pipe(
        distinctUntilChanged(), // Only emit when params actually change
        filter(() => !this.isNavigating), // Prevent navigation during navigation
        takeUntil(this.destroy$)
      )
      .subscribe((params) => {
        this.view = params['view'];
        this.navService.updateMapGridState({ view: this.view });
      });
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
