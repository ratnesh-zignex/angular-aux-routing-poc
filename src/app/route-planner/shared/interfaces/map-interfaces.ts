import { IZDailyCustomerDataType } from "./interfaces";

export interface MapEvent {
  type?: string;
  points: IZDailyCustomerDataType[];
  payload?: {
    points: IZDailyCustomerDataType[];
  };
}

export interface GridDataUpdatedPayload {
  points: IZDailyCustomerDataType[];
}
