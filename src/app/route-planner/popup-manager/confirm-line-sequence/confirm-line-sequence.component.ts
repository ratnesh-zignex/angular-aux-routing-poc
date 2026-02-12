/******************************************************************************
 * (C) Copyright 2025 ZignEx Inc. (https://www.zignex.com/)
 * Modified by: Disha Chouhan on 12/8/2025, 4:13:36 PM
 *
 * This software is the confidential and proprietary information of ZignEx.
 * You may not use or distribute this software except in compliance with the
 * terms of any applicable license agreement or other legally binding agreement
 * between you and ZignEx. Unauthorized reproduction, distribution, or
 * disclosure of this software is strictly prohibited.
 ******************************************************************************/
import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { hidePopup } from '@mescius/wijmo';
import { Popup } from '@mescius/wijmo.input';
import { HotToastService } from '@ngxpert/hot-toast';
import {
  IZId,
  IZMarkerLocationData,
  IZNewSequenceData,
  SequenceComponent,
  ZxOlMapComponent,
  ZxOlMapService
} from '@zignex/zx-ol-map';
import { take } from 'rxjs';
// import { IZDailyCustomerDataType, IZPlannerType } from 'src/app/shared';
// import { popupBtn } from 'src/app/shared/constant';
// import {
//   IZConfirmSequencePopupData,
//   IZPopupBtn,
//   IZUpdateMultiCustDataReq
// } from 'src/app/shared/interfaces/popups-interfaces';
// import { MapService, SidebarToggleService } from 'src/app/shared/services';
// import { CommonService } from 'src/app/shared/services/common.service';
// import { HttpService } from 'src/app/shared/services/http.service';
// import { SpinnerService } from 'src/app/shared/services/spinner.service';
@Component({
  selector: 'app-confirm-line-sequence',
  templateUrl: './confirm-line-sequence.component.html',
  styleUrls: ['./confirm-line-sequence.component.scss'],
  imports: [FormsModule]
})
export class ConfirmLineSequenceComponent implements OnChanges {
  private _olmapService: ZxOlMapService = inject(ZxOlMapService);
  // private _http: HttpService = inject(HttpService);
  // private _spinner: SpinnerService = inject(SpinnerService);
  // private _commonService: CommonService = inject(CommonService);
  private _toast: HotToastService = inject(HotToastService);
  // private _mapService: MapService = inject(MapService);
  // private _sidebarService: SidebarToggleService = inject(SidebarToggleService);

  // frmLogin: Popup;
  customerSequences: any;
  // map: ZxOlMapComponent;
  @Input() confirmLineSequenceBool: any | undefined;
  sequenceInt: SequenceComponent | undefined;
  // popupBtn: IZPopupBtn = popupBtn;

  // constructor() {
  //   this.map = this._olmapService.getMap<ZxOlMapComponent>(IZId.map);
  // }
  // hidePopup(type: string): void {
  //   if (this.sequenceInt) this.sequenceInt.toggleStopClickEvent();
  //   if (this.sequenceInt && (type == 'no' || type == 'yes')) {
  //     this.sequenceInt.finishLineDrawing();
  //     this.sequenceInt.clearSequenceLines();
  //   }
  //   hidePopup(this.frmLogin.hostElement);
  // }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['confirmLineSequenceBool']) {
      if (changes['confirmLineSequenceBool'].currentValue) {
        this.customerSequences = changes['confirmLineSequenceBool'].currentValue.data.sequences as IZNewSequenceData[];
        // this.sequenceInt = this.map.getMapInteraction<SequenceComponent>('lineSequence');
        // if (this.frmLogin && Object.keys(this.customerSequences).length > 0) {
        //   this.showPopup();
        // }
      }
    }
  }
  // initialize(): void {
  //   this.frmLogin = new Popup('#confirmLineSequence', {
  //     isDraggable: true,
  //     hideTrigger: 'None',
  //     modal: true,
  //     removeOnHide: true
  //   });
  // }

  // ngAfterViewInit(): void {
  //   this.initialize();
  //   if (this.frmLogin && Object.keys(this.customerSequences).length > 0) {
  //     this.showPopup();
  //   }
  // }

  // showPopup(): void {
  //   if (this.sequenceInt) this.sequenceInt.toggleStopClickEvent();
  //   this.frmLogin.show(true);
  // }

  // submitForm(): void {
  //   const request: IZUpdateMultiCustDataReq[] = [];
  //   const apiName: string = 'updateMultiCustData';
  //   for (const i in this.customerSequences) {
  //     const customerSeq: IZNewSequenceData | undefined = this.customerSequences[i];
  //     if (!customerSeq) continue;
  //     const newSeqNo: string | undefined = customerSeq.newSNo;
  //     if (newSeqNo) {
  //       request.push({
  //         clKey: 'sNo',
  //         clVal: newSeqNo,
  //         uids: [
  //           {
  //             orId: customerSeq.orId
  //           }
  //         ],
  //         usrNm: this._http.usrId,
  //         acctId: this._http.accountId,
  //         opsUnitCd: this._sidebarService.selectedOpsUnit,
  //         routeType: this._sidebarService.selectedRouteType
  //       });
  //       customerSeq.sNo = newSeqNo;
  //       delete customerSeq.newSNo;
  //     }
  //   }
  //   this._http
  //     .postRequest<string, IZUpdateMultiCustDataReq[], { responseType: 'text' }>(
  //       apiName,
  //       { responseType: 'text' },
  //       request
  //     )
  //     .pipe(take(1))
  //     .subscribe({
  //       next: () => {
  //         this._spinner.removeSpinner();
  //         if (this._commonService.loadedData.plannerType === IZPlannerType.RPDailyView) {
  //           for (const i in this.customerSequences) {
  //             const updatedSeq: IZMarkerLocationData | undefined = this.customerSequences[i];
  //             if (updatedSeq) {
  //               const info: IZMarkerLocationData = updatedSeq;
  //               const custId: number | undefined = this._commonService.customerDataMapping[info.orId];
  //               if (custId != undefined) {
  //                 const obj: IZDailyCustomerDataType | undefined = this._commonService.loadedData.data[custId];
  //                 if (obj) {
  //                   obj.sNo = Number(info.sNo);
  //                   void this._mapService.mapDataChange([obj], 'sNo', this._commonService.plannerType, false);
  //                 }
  //               }
  //             }
  //           }
  //           void this._sidebarService.getDistinctData({
  //             plannerType: this._commonService.plannerType,
  //             getRNoFromSrvc: true
  //           });
  //           this._commonService.loadedDataSubject.next({ loadedData: this._commonService.loadedData });
  //           void this._mapService.setMapOption(this._commonService.plannerType, true);
  //           this._toast.success('Customer sequences updated successfully', { id: 'pause' });
  //         }
  //       },
  //       error: (error: HttpErrorResponse) => {
  //         this._spinner.removeSpinner();
  //         this._toast.error(error.error);
  //       }
  //     });
  // }
}
