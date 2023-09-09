import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecedentComponent } from './precedent.component';

describe('PrecedentComponent', () => {
  let component: PrecedentComponent;
  let fixture: ComponentFixture<PrecedentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrecedentComponent]
    });
    fixture = TestBed.createComponent(PrecedentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
