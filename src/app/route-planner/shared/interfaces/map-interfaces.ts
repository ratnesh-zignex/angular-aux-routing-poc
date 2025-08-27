export interface MapPoint {
  route: string;
  lat: number;
  lng: number;
  color: string;
  stop?: string;
  passengers?: number;
  day?: string;
}

export interface MapEvent {
  type?: string;
  points: MapPoint[];
  payload?: {
    points: MapPoint[];
  };
}

export interface GridDataUpdatedPayload {
  points: MapPoint[];
}
