import { TestBed } from '@angular/core/testing';

import { MapPopoutServiceService } from './map-popout-service.service';

describe('MapPopoutServiceService', () => {
  let service: MapPopoutServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapPopoutServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
