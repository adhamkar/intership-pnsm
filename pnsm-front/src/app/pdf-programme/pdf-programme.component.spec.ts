import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfProgrammeComponent } from './pdf-programme.component';

describe('PdfProgrammeComponent', () => {
  let component: PdfProgrammeComponent;
  let fixture: ComponentFixture<PdfProgrammeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PdfProgrammeComponent]
    });
    fixture = TestBed.createComponent(PdfProgrammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
