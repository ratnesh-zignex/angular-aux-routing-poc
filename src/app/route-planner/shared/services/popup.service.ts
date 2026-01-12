import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PopupState, PopupType } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class PopupService {
  private popupStateSubject = new BehaviorSubject<PopupState>({ 
    type: null, 
    isOpen: false 
  });
  popupState$: Observable<PopupState> = this.popupStateSubject.asObservable();
  
  constructor() {}
  
  openPopup(type: PopupType, data?: any): void {
    this.popupStateSubject.next({ type, data, isOpen: true });
  }
  
  closePopup(): void {
    this.popupStateSubject.next({ type: null, isOpen: false });
  }
  
  // Legacy methods for backward compatibility
  open(type: PopupType, data?: any): void {
    this.openPopup(type, data);
  }
  
  close(type: PopupType): void {
    this.closePopup();
  }
}
