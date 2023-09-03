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
  @Input() lastdData: any;
  isTableVisible: boolean = false;
  isDataSaved: boolean = false;
  shraeddata: any[]=[];
  lastInsertedData: any;
  @ViewChild('test',{static:false}) el!:ElementRef;
  @ViewChild('myprogramme') updateData:NgForm | undefined;

  constructor(private dataService: TransferDataService,private http: HttpClient,private prg:ProgrammeRemplireComponent) {}

  ngOnInit(): void {
    const programmeId = this.dataService.getlastId();
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
  getlastinserteddata() {
    this.dataService.lastInsertedData$.subscribe((data) => {
      this.lastInsertedData = data;
    });
  }
  fetchProgramData(programmeId: string) {
    this.http
      .get(`http://localhost:3000/programmes/${programmeId}`)
      .subscribe(
        (data: any) => {
          this.lastInsertedData = data;
        },
        (error) => {
          console.log('error getting data', error);
        }
      );
  }
  fetchLastId() {
    this.dataService.getlastId().subscribe(
      (id: any) => {
        this.lastInsertedData = id;
        this.fetchProgramData(this.lastInsertedData.programme_id);
      },
      (error: any) => {
        console.error('Error fetching last program ID', error);
      }
    );
  }


}
