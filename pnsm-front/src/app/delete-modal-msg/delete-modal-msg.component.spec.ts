import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteModalMsgComponent } from './delete-modal-msg.component';

describe('DeleteModalMsgComponent', () => {
  let component: DeleteModalMsgComponent;
  let fixture: ComponentFixture<DeleteModalMsgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteModalMsgComponent]
    });
    fixture = TestBed.createComponent(DeleteModalMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
