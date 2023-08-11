import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportComponent } from './rapport.component';

describe('RapportComponent', () => {
  let component: RapportComponent;
  let fixture: ComponentFixture<RapportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RapportComponent]
    });
    fixture = TestBed.createComponent(RapportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
