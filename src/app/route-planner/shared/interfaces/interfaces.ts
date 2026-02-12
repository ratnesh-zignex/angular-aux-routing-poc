import { customer } from "../../../protos/customer/customer";

export interface IZRouteDataDOW {
  color: string;
  custCnt: number;
  dow: null | string;
  isDefaultColor: null | string;
  lftSum: number;
  rtTypLobCd: string;
  srvcOrdrRtNo: string;
  srvcordrrtno?: string;
  srvcOrdrRtNoVdra: string;
  symbolArray: number[];
  wghtSum: number;
  wghtSumMSW: null | number;
  wghtSumSSR: null | number;
  yrdSum: number;
  drvrCd: string;
  // srvcOrdrRtNo: string;
  vehId: string;
  vehIdInt: number;
  vehTypeCode: string;
  zexUid: number;
}

export interface IZBaseDataType {
  index: number;
}
export interface IZDailyCustomerDataType extends customer.ICustomer {
  index: number;
}
export type PopupType = 'statistics' | 'geocode' | 'fieldCalculator' | 'LineSeq' | 'EditAll' | null;
export interface PopupState {
  type: PopupType;
  data?: any; // Data to pass to the popup component
}

// Rectangle Selection Types
export enum IZToolType {
  BoxSelection = 'boxSelection',
  PolygonSelection = 'polygonSelection',
  Eraser = 'eraser',
  LineSequence = 'lineSequence',
}

export interface IZMapSelectionData {
  toolType: IZToolType | string;
  data: {
    selectedIndices: number[];
    selectedCids?: string[]; // Add robust ID-based selection
    allIndices?: number[];
  };
}