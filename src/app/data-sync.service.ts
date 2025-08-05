import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataSyncService {
  constructor() {}
  private pointsSubject = new BehaviorSubject<any[]>([]);
  points$ = this.pointsSubject.asObservable();

  setPoints(points: any[]) {
    this.pointsSubject.next(points);
  }
}
