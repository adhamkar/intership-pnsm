import { Component,OnInit,ViewChild,ElementRef,Inject  } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import{ProgrammeRemplireComponent} from '../programme-remplire/programme-remplire.component'
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-pdf-programme',
  templateUrl: './pdf-programme.component.html',
  styleUrls: ['./pdf-programme.component.css']
})
export class PdfProgrammeComponent implements OnInit{
  tableData: any[]=[];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private dialog: MatDialog) {
    this.tableData = data.tableData;
  }
  ngOnInit(): void {

  }
  openModal(): void {
    const dialogRef = this.dialog.open(ProgrammeRemplireComponent, {
      width: '80%',
      height: '80%',
      // You can pass any necessary data to the modal using the `data` option
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Handle any actions after the modal is closed (if needed)
    });
  }
}
