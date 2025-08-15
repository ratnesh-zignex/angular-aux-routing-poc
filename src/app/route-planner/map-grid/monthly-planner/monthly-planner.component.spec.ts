import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyPlannerComponent } from './monthly-planner.component';

describe('MonthlyPlannerComponent', () => {
  let component: MonthlyPlannerComponent;
  let fixture: ComponentFixture<MonthlyPlannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonthlyPlannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlyPlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
