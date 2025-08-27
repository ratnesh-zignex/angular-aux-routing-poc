import { TestBed } from '@angular/core/testing';

import { GridPopoutService } from './grid-popout.service';

describe('GridPopoutService', () => {
  let service: GridPopoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GridPopoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
