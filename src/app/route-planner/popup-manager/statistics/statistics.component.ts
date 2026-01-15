import { Component, EventEmitter, Input, OnInit, Output, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IZDailyCustomerDataType } from '../../shared/interfaces/interfaces';
import { GridPopoutService, PopoutState } from '../../shared/services/grid-popout.service';
import { Subject, takeUntil } from 'rxjs';

interface RouteStatistics {
  rNo: string;
  stops: number;
  lifts: number;
  yards: number;
  weightTons: number;
  weightLbs: number;
  color?: string;
}

interface StatisticsInput {
  customers: IZDailyCustomerDataType[];
  routes: string[];
  dayOfWeek: string;
  operationUnit?: string;
  routeType?: string;
}

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.scss'
})
export class StatisticsComponent implements OnInit, OnDestroy {
  @Input() data: StatisticsInput | null = null;
  @Output() close = new EventEmitter<void>();

  statisticsData: RouteStatistics[] = [];
  totals: RouteStatistics = {
    rNo: 'Total',
    stops: 0,
    lifts: 0,
    yards: 0,
    weightTons: 0,
    weightLbs: 0
  };

  private destroy$ = new Subject<void>();
  public currentState: PopoutState | null = null;

  constructor(private popoutService: GridPopoutService) {}

  ngOnInit(): void {
    // 1. Sync State
    this.currentState = this.popoutService.popoutState;
    console.log('Statistics: Initial State:', this.currentState);

    // 2. Fetch Weekly Stats if needed
    if (this.currentState.plannerType === 'Weekly') {
        this.fetchWeeklyStats();
    }

    if (this.data?.customers) {
      this.calculateStatistics(this.data.customers);
    }
  }

  fetchWeeklyStats() {
      // Use Bridge to get stats
      const routeType = this.currentState?.selectedRouteType || ''; 
      // Need to confirm if we need more params, user said "selectedRouteType"
      this.popoutService.sendRequest<any[]>('GET_WEEKLY_STATS', { routeType })
          .pipe(takeUntil(this.destroy$))
          .subscribe({
              next: (data) => {
                  console.log('Statistics: Received Weekly Stats:', data);
                  // TODO: Process data logic here (filtering types etc as per original code)
              },
              error: (err) => console.error('Statistics: Error fetching stats:', err)
          });
  }

  ngOnDestroy() {
      this.destroy$.next();
      this.destroy$.complete();
  }

  calculateStatistics(customers: IZDailyCustomerDataType[]): void {
    const routeMap = new Map<string, RouteStatistics>();
    const customersByRoute = new Map<string, Set<string>>();

    customers.forEach((customer: IZDailyCustomerDataType) => {
      const routeNum = customer.rNo || 'Unknown';
      
      if (!routeMap.has(routeNum)) {
        routeMap.set(routeNum, {
          rNo: routeNum,
          stops: 0,
          lifts: 0,
          yards: 0,
          weightTons: 0,
          weightLbs: 0
        });
        customersByRoute.set(routeNum, new Set<string>());
      }

      const stats = routeMap.get(routeNum)!;
      const cidSet = customersByRoute.get(routeNum)!;

      // Add customer ID to set for unique stop count
      if (customer.cid) {
        cidSet.add(customer.cid);
      }

      // Aggregate lifts (quantity)
      const quantity = Number(customer.uqty) || 0;
      stats.lifts += quantity;

      // Aggregate yards (quantity * volume)
      const volume = Number((customer as any).uVolVal) || 0;
      stats.yards += quantity * volume;

      // Aggregate weight (quantity * weight)
      const weight = Number((customer as any).srvcOrdrWtVal) || 0;
      stats.weightLbs += quantity * weight;
    });

    // Convert to array and calculate stops from Set size
    this.statisticsData = Array.from(routeMap.values()).map(stat => {
      const cidSet = customersByRoute.get(stat.rNo)!;
      stat.stops = cidSet.size;
      stat.weightTons = Number((stat.weightLbs / 2000).toFixed(2));
      return stat;
    }).sort((a, b) => a.rNo.localeCompare(b.rNo));

    // Calculate totals
    this.totals = this.statisticsData.reduce((acc, curr) => ({
      rNo: 'Total',
      stops: acc.stops + curr.stops,
      lifts: acc.lifts + curr.lifts,
      yards: acc.yards + curr.yards,
      weightTons: acc.weightTons + curr.weightTons,
      weightLbs: acc.weightLbs + curr.weightLbs
    }), {
      rNo: 'Total',
      stops: 0,
      lifts: 0,
      yards: 0,
      weightTons: 0,
      weightLbs: 0
    });

    // Round totals
    this.totals.weightTons = Number(this.totals.weightTons.toFixed(2));
    this.totals.yards = Number(this.totals.yards.toFixed(2));
  }

  onClose(): void {
    this.close.emit();
  }

  exportToCSV(): void {
    const headers = ['Route #', 'Stops', 'Lifts', 'Yards', 'Weight (Tons)', 'Weight (Lbs)'];
    const csvData = [
      headers.join(','),
      ...this.statisticsData.map(row => 
        `${row.rNo},${row.stops},${row.lifts},${row.yards},${row.weightTons},${row.weightLbs}`
      ),
      `${this.totals.rNo},${this.totals.stops},${this.totals.lifts},${this.totals.yards.toFixed(2)},${this.totals.weightTons},${this.totals.weightLbs}`
    ].join('\n');

    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `statistics_${this.data?.dayOfWeek || 'data'}_${new Date().getTime()}.csv`;
    link.click();
    window.URL.revokeObjectURL(url);
  }
}
