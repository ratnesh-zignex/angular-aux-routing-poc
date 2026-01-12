import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IZDailyCustomerDataType } from '../../shared/interfaces/interfaces';

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
export class StatisticsComponent implements OnInit {
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

  ngOnInit(): void {
    if (this.data?.customers) {
      this.calculateStatistics(this.data.customers);
    }
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
