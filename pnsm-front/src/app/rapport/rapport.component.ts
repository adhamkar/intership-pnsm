import { Component,OnInit,ViewChild,ElementRef,Input  } from '@angular/core';
import * as jsPDF from 'jspdf';
import { SharedDataComponent } from '../shared-data/shared-data.component';
import { SharePopulationDataComponent } from '../share-population-data/share-population-data.component';
import{TransferDataService} from '../transfer-data.service';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { error } from 'jquery';
import { ProgrammeRemplireComponent } from '../programme-remplire/programme-remplire.component';

@Component({
  selector: 'rapport',
  templateUrl: './rapport.component.html',
  styleUrls: ['./rapport.component.css']
})
export class RapportComponent implements OnInit{
  @ViewChild('test',{static:false}) el!:ElementRef;
  @ViewChild('myprogramme') updateData:NgForm | undefined;

  constructor(private dataService: TransferDataService,private http: HttpClient,private prg:ProgrammeRemplireComponent) {}

  ngOnInit(): void {

  }

  downloadTableAsPDF(){
    if (!this.el || !this.el.nativeElement) {
      console.error('ElementRef is not available.');
      return;
    }

    let pdf=new jsPDF.default("l","pt","a4",true);
    pdf.html(this.el.nativeElement,{
      callback: (pdf:any)=>{
        pdf.save("table.pdf");
      }
    })
  }
  


}
