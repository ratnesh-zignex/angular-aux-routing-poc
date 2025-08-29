import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoutGridComponent } from './popout-grid.component';

describe('PopoutGridComponent', () => {
  let component: PopoutGridComponent;
  let fixture: ComponentFixture<PopoutGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopoutGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopoutGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
