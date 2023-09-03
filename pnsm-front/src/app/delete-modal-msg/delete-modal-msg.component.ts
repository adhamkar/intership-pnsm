import { Component,OnInit  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-delete-modal-msg',
  templateUrl: './delete-modal-msg.component.html',
  styleUrls: ['./delete-modal-msg.component.css']
})
export class DeleteModalMsgComponent implements OnInit {
  showMessage = true;

  ngOnInit() {
   
  }
  constructor(private dialog: MatDialog){}
  closeModal():void{
    const close=this.dialog.closeAll()
     }
}
