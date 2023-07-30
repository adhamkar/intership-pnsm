import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanActionComponent } from './plan-action.component';

describe('PlanActionComponent', () => {
  let component: PlanActionComponent;
  let fixture: ComponentFixture<PlanActionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanActionComponent]
    });
    fixture = TestBed.createComponent(PlanActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
