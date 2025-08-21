import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoutMapComponent } from './popout-map.component';

describe('PopoutMapComponent', () => {
  let component: PopoutMapComponent;
  let fixture: ComponentFixture<PopoutMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopoutMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopoutMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
