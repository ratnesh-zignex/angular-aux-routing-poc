import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PopupState, PopupType } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class PopupService {
  private popupStateSubject = new BehaviorSubject<PopupState>({ type: null });
  popupState$: Observable<PopupState> = this.popupStateSubject.asObservable();
  constructor() {}
  open(type: PopupType, data?: any): void {
    this.popupStateSubject.next({ type, data });
  }
  close(type: PopupType): void {
    this.popupStateSubject.next({ type });
  }
}
