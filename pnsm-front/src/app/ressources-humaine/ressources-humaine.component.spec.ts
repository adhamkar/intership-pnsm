import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RessourcesHumaineComponent } from './ressources-humaine.component';

describe('RessourcesHumaineComponent', () => {
  let component: RessourcesHumaineComponent;
  let fixture: ComponentFixture<RessourcesHumaineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RessourcesHumaineComponent]
    });
    fixture = TestBed.createComponent(RessourcesHumaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
