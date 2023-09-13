import { Component,OnInit ,ViewChild,ElementRef} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import  jsPDF from 'jspdf';
import 'jspdf-autotable'
@Component({
  selector: 'app-compte-rendu',
  templateUrl: './compte-rendu.component.html',
  styleUrls: ['./compte-rendu.component.css']
})
export class CompteRenduComponent implements OnInit{
  lastInsertedRecord: any;
  lastpopulation :any;
  @ViewChild('test',{static:false}) el!:ElementRef;
  @ViewChild('myprogramme') updateData:NgForm | undefined;
  constructor(private router: Router,private http: HttpClient){}

getlastrecord(){
this.http.get('http://localhost:3000/programmes/last').subscribe(
  (response:any)=>{
    this.lastInsertedRecord=response
    console.log('programme displayed:', response);
  },
  (error)=>{
    console.error('Error displaying last record:', error);
    console.log('Detailed error:', error.error);
  }
)
this.http.get('http://localhost:3000/populations/last').subscribe(
  (response:any)=>{
    this.lastpopulation=response
    console.log('population displayed:', response);
  },
  (error)=>{
    console.error('Error displaying last record:', error);
    console.log('Detailed error:', error.error);
  }
)
}

  ngOnInit(): void {
    this.getlastrecord();
  }

downloadHTMLAsPDF() {
  if (!this.lastInsertedRecord) {
    console.error('Data not available.');
    return;
  }
  const margins = {
    top: 20,    // Top margin
    bottom: 20, // Bottom margin
    left: 20,   // Left margin
    right: 20,  // Right margin
  };

  const doc = new jsPDF({
    orientation: 'l',
    unit: 'pt',
    format: 'a3',
    ...margins
  });
//hola
  const element = document.getElementById('htmlContent'); // Provide an ID to your HTML content container

  if (element) {
    const options = {
      margin: 15,
      pagesplit: true,
    };

    doc.html(element, options).then(() => {
      doc.save('document.pdf');
    });
  } else {
    console.error('HTML content not found.');
  }
}
ToHome(){
this.router.navigate(['/home'])
}

}
