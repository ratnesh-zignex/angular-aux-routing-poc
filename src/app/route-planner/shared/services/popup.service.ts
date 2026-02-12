import { Injectable, signal, computed } from '@angular/core';
import { PopupState, PopupType } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class PopupService {
  private initialState: PopupState = {
    type: null,
    data: null
  };

  // 1. Create a Writable Signal (Private)
  private _popupState = signal<PopupState>(this.initialState);

  // 2. Expose a Read-Only Signal (Public)
  readonly popupState = this._popupState.asReadonly();

  constructor() { }

  // Generic Open Method
  openPopup(type: PopupType, data?: any): void {
    this._popupState.set({ type, data });
  }

  // Generic Open Method (Legacy alias)
  open(type: PopupType, data?: any): void {
    this.openPopup(type, data);
  }

  closePopup(): void {
    this._popupState.set(this.initialState);
  }

  close(type: PopupType): void {
    this.closePopup();
  }
}
