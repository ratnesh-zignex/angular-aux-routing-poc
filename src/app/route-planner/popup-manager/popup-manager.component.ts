import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toObservable } from '@angular/core/rxjs-interop';
import { Subscription } from 'rxjs';
import { StatisticsComponent } from './statistics/statistics.component';
import { GeocodeComponent } from './geocode/geocode.component';
import { EditAllComponent } from './edit-all/edit-all.component';
import { ConfirmLineSequenceComponent } from './confirm-line-sequence/confirm-line-sequence.component';
import { PopupService } from '../shared/services/popup.service';
import { GridPopoutService } from '../shared/services/grid-popout.service';

@Component({
  selector: 'app-popup-manager',
  standalone: true,
  imports: [CommonModule, StatisticsComponent, GeocodeComponent, EditAllComponent, ConfirmLineSequenceComponent],
  templateUrl: './popup-manager.component.html',
  styleUrl: './popup-manager.component.scss',
})
export class PopupManagerComponent implements OnInit, OnDestroy {
  isGridPoppedOut: boolean = false;

  // Local State Properties (Legacy Style)
  statisticsData: any = null;
  geocodeData: any = null;
  editAllVisible: boolean = false;
  confirmLineSequenceBool: any = null;

  private subscription: Subscription = new Subscription();
  modalPopupInput: any;

  constructor(
    public popupService: PopupService,
    private popoutService: GridPopoutService
  ) {
    // Convert Signal to Observable to use subscription (User Preference)

    this.subscription.add(
      toObservable(this.popupService.popupState).subscribe((res) => {
        // Reset all local states
        this.statisticsData = null;
        this.geocodeData = null;
        this.editAllVisible = false;
        this.confirmLineSequenceBool = null;

        // Switch on type to set specific local state
        switch (res.type) {
          case 'statistics':
            this.statisticsData = res.data;
            break;
          case 'geocode':
            this.geocodeData = res.data;
            break;
          case 'EditAll':
            this.editAllVisible = true;
            break;
          case 'LineSeq':
            this.confirmLineSequenceBool = res;
            break;
        }
      })
    );
  }

  ngOnInit(): void {
    this.isGridPoppedOut = this.popoutService.isGridPoppedOut();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  closePopup(): void {
    this.popupService.closePopup();
  }
}
