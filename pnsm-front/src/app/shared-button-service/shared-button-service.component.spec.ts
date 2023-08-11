import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedButtonServiceComponent } from './shared-button-service.component';

describe('SharedButtonServiceComponent', () => {
  let component: SharedButtonServiceComponent;
  let fixture: ComponentFixture<SharedButtonServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharedButtonServiceComponent]
    });
    fixture = TestBed.createComponent(SharedButtonServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
