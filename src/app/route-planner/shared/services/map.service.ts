import { Subject, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

export interface IZColorByDetails {
  filterAttr: string;
  boundaryColor: any[]; // Adjust type if known
}

@Injectable({
  providedIn: 'root'
})
export class MapService {
  public colorBySubject = new BehaviorSubject<IZColorByDetails>({ filterAttr: '', boundaryColor: [] });
  public colorByList: IZColorByDetails = { filterAttr: '', boundaryColor: [] };

  constructor() { }
}
