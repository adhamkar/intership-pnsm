import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammeRemplireComponent } from './programme-remplire.component';

describe('ProgrammeRemplireComponent', () => {
  let component: ProgrammeRemplireComponent;
  let fixture: ComponentFixture<ProgrammeRemplireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgrammeRemplireComponent]
    });
    fixture = TestBed.createComponent(ProgrammeRemplireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
