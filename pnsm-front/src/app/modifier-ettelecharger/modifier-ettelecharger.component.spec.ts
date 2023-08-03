import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierETtelechargerComponent } from './modifier-ettelecharger.component';

describe('ModifierETtelechargerComponent', () => {
  let component: ModifierETtelechargerComponent;
  let fixture: ComponentFixture<ModifierETtelechargerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierETtelechargerComponent]
    });
    fixture = TestBed.createComponent(ModifierETtelechargerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
