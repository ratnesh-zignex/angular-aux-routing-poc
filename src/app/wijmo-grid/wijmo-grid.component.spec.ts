import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WijmoGridComponent } from './wijmo-grid.component';

describe('WijmoGridComponent', () => {
  let component: WijmoGridComponent;
  let fixture: ComponentFixture<WijmoGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WijmoGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WijmoGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
