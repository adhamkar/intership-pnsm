import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteRenduComponent } from './compte-rendu.component';

describe('CompteRenduComponent', () => {
  let component: CompteRenduComponent;
  let fixture: ComponentFixture<CompteRenduComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompteRenduComponent]
    });
    fixture = TestBed.createComponent(CompteRenduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
