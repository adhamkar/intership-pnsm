import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharePopulationDataComponent } from './share-population-data.component';

describe('SharePopulationDataComponent', () => {
  let component: SharePopulationDataComponent;
  let fixture: ComponentFixture<SharePopulationDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharePopulationDataComponent]
    });
    fixture = TestBed.createComponent(SharePopulationDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
