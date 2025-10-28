import { Component, OnInit } from '@angular/core';
import { PopupState } from '../shared/interfaces/interfaces';
import { PopupService } from '../shared/services/popup.service';
import { CommonModule } from '@angular/common';
import { GridPopoutService } from '../shared/services/grid-popout.service';

@Component({
  selector: 'app-popup-manager',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popup-manager.component.html',
  styleUrl: './popup-manager.component.scss',
})
export class PopupManagerComponent implements OnInit {
  popupState: PopupState | null = null;
  isGridPoppedOut: boolean = false;
  constructor(public popupService: PopupService, private popoutService: GridPopoutService) {}
  ngOnInit(): void {
    this.popupService.popupState$.subscribe((state) => {
      this.popupState = state;
       this.isGridPoppedOut = this.popoutService.isGridPoppedOut();
      
    });
  }
}
