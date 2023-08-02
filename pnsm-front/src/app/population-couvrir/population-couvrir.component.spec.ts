import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulationCouvrirComponent } from './population-couvrir.component';

describe('PopulationCouvrirComponent', () => {
  let component: PopulationCouvrirComponent;
  let fixture: ComponentFixture<PopulationCouvrirComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopulationCouvrirComponent]
    });
    fixture = TestBed.createComponent(PopulationCouvrirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
