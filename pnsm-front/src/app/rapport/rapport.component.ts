import { Component,ElementRef, ViewChild } from '@angular/core';
import * as jsPDF from 'jspdf';
import { SharedDataComponent } from '../shared-data/shared-data.component';
import { SharePopulationDataComponent } from '../share-population-data/share-population-data.component';
@Component({
  selector: 'app-rapport',
  templateUrl: './rapport.component.html',
  styleUrls: ['./rapport.component.css']
})
export class RapportComponent {
  
  @ViewChild('test',{static:false}) el!:ElementRef
  tableData: any[] = [];
  populationData: any[] = [];

  constructor(private sharedata: SharedDataComponent, private populationShared:SharePopulationDataComponent) {
    this.tableData = this.sharedata.getData();
    this.populationData = this.populationShared.getData();
  }

  downloadTableAsPDF(){
    let pdf=new jsPDF.default("l","pt","a3",true);

    pdf.html(this.el.nativeElement,{
      callback: (pdf:any)=>{
        pdf.save("table.pdf")
      }
    })

  }
}
