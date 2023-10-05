import { Component,OnInit ,ViewChild,ElementRef, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import  jsPDF from 'jspdf';
import 'jspdf-autotable';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { saveAs } from 'file-saver';
(pdfMake as any).vfs=pdfFonts.pdfMake.vfs

@Component({
  selector: 'app-compte-rendu',
  templateUrl: './compte-rendu.component.html',
  styleUrls: ['./compte-rendu.component.css']
})
export class CompteRenduComponent implements OnInit{
  lastInsertedData = {
    pdr: 'PDR Value',
    distance: 'Distance Value',
    accessibility: 'Accessibility Value',
    localite: 'Localite Value',
    t1: 'Trimestre 1 Value',
    t2: 'Trimestre 2 Value',
    t3: 'Trimestre 3 Value',
    t4: 'Trimestre 4 Value'
  };
  lastInsertedRecord: any;
  lastpopulation :any;
  lastressource: any;
  lastRH: any;
  @ViewChild('test',{static:false}) el!:ElementRef;
  @ViewChild('myprogramme') updateData:NgForm | undefined;
  constructor(private router: Router,private http: HttpClient,private ngZone: NgZone){}

getlastrecord(){
this.http.get('http://localhost:3000/programmes/last').subscribe(
  (response:any)=>{
    this.lastInsertedRecord=response
    console.log('programme displayed:', response);
    this.generatemyPDF();
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
    this.generatemyPDF();
  },
  (error)=>{
    console.error('Error displaying last record:', error);
    console.log('Detailed error:', error.error);
  }
)
this.http.get('http://localhost:3000/ressources/last').subscribe(
  (response:any)=>{
    this.lastressource=response
    console.log('ressources displayed:', response);
    this.generatemyPDF();
  },
  (error)=>{
    console.error('Error displaying last record:', error);
    console.log('Detailed error:', error.error);
  }
)
this.http.get('http://localhost:3000/ressourceHumaines/last').subscribe(
  (response:any)=>{
    this.lastRH=response
    console.log('ressources humaines displayed:', response);
    this.generatemyPDF();
  },
  (error)=>{
    console.error('Error displaying last record:', error);
    console.log('Detailed error:', error.error);
  }
)
}

  ngOnInit(): void {
    this.getlastrecord();
    this.generatemyPDF();
    this.lastInsertedRecord;
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
/*
 const tabledata=[];
  const tableElement=document.getElementById('table-example-1');
  if(tableElement){
    const tableBody=document.getElementsByTagName('tbody')[0];
    if(tableBody){
      const tableRows=tableBody.getElementsByTagName('tr');
      for(let i=0;i<tableRows.length;i++){
        const rowData = [];
        const tableCells=tableRows[i].getElementsByTagName('td');
        for (let j = 0; j < tableCells.length; j++) {
          rowData.push(tableCells[j].textContent);
        }
        tabledata.push(rowData);
      }
    }
  }
*/
generatemyPDF() {
  if (!this.lastInsertedRecord || !this.lastpopulation || !this.lastressource) {
    // Ensure that lastInsertedRecord is defined before proceeding
    return;
  }
  const tableData = [
    [{ text: 'Accessibilité au PDR', style: 'tableHeader' }, this.lastInsertedRecord.pdr],
    [{ text: 'Distance', style: 'tableHeader' }, this.lastInsertedRecord.distance],
    [{ text: 'Accessibilité au PDR', style: 'tableHeader' }, this.lastInsertedRecord.accessibility],
    [{ text: 'Liste des localités', style: 'tableHeader' }, this.lastInsertedRecord.localite],
    [{ text: 'Trimestre 1', style: 'tableHeader' }, this.lastInsertedRecord.t1],
    [{ text: 'Trimestre 2', style: 'tableHeader' }, this.lastInsertedRecord.t2],
    [{ text: 'Trimestre 3', style: 'tableHeader' }, this.lastInsertedRecord.t3],
    [{ text: 'Trimestre 4', style: 'tableHeader' }, this.lastInsertedRecord.t4],


  ];
  const tableData1=[
    [{text: 'Population rurale', style: 'tableHeader' },this.lastpopulation.population_rurale],
    [{text: 'Population cible de équipe mobile', style: 'tableHeader' },this.lastpopulation.population_cible],
    [{text: 'Population habitant à moins de 3km', style: 'tableHeader' },this.lastpopulation.population_habitantMoins3km],
    [{text: 'Population habitant entre 3km et 6km', style: 'tableHeader' },this.lastpopulation.population_habitantEntre3km6km],
    [{text: 'Population habitant entre 6km et 10km', style: 'tableHeader' },this.lastpopulation.population_habitantEntre6km10km],
    [{text: 'Population habitant à plus de 10km', style: 'tableHeader' },this.lastpopulation.population_habitantPlus10km],
    [{text: 'Distance moyenne entre le centre de santé et la route goudronnée la plus proche (km) ', style: 'tableHeader' },this.lastpopulation.distanceMoyenneRouteProche],
    [{text: 'Naissances attendues ', style: 'tableHeader' },this.lastpopulation.enfant_naissancesAttendues],
    [{text: 'Enfants moins de 1ans', style: 'tableHeader' },this.lastpopulation.enfant_moins1ans],
    [{text: 'Enfants moins de 5ans', style: 'tableHeader' },this.lastpopulation.enfant_moins5ans],
    [{text: 'Nombre de FAR', style: 'tableHeader' },this.lastpopulation.femme_far],
    [{text: 'Nombre de FMAR', style: 'tableHeader' },this.lastpopulation.femme_fmar],
    [{text: 'Femmes enceintes', style: 'tableHeader' },this.lastpopulation.femme_femmeEnceinte],
  ]
  const tableData2=[
    [{text: 'Type', style: 'tableHeader' },this.lastressource.vehicule_type],
    [{text: 'Age', style: 'tableHeader' },this.lastressource.vehicule_age],
    [{text: 'Kilométrage annuel total à parcourir', style: 'tableHeader' },this.lastressource.budget_KmsParcourus],
    [{text: 'Besoin en carburant (MAD)', style: 'tableHeader' },this.lastressource.budget_besoinCarburant],
    [{text: 'Besoins en Unités Sanitaires Mobiles (USM)', style: 'tableHeader' },this.lastressource.besoinUsm],
    [{text: 'Observation', style: 'tableHeader' },this.lastressource.observation],

  ]
  const myTable={
    table:{
      widths: ['auto', 'auto', '*', '*', '*'],
      headerRows: 1,
      body:[
        [
          { text: 'Informations sur le véhicule', colSpan: 2, style: 'theTh' },
          '',
          { text: 'Kilométrage annuel total à parcourir', rowSpan: 2, style: 'theTh' },
          { text: 'Besoin en carburant (MAD)', rowSpan: 2, style: 'theTh' },
          { text: 'Besoins en Unités Sanitaires Mobiles (USM)', rowSpan: 2, style: 'theTh' },
        ],
        ['', '', '', '', ''],
      [this.lastressource.vehicule_type,
      this.lastressource.vehicule_age,
      this.lastressource.budget_KmsParcourus,
      this.lastressource.budget_besoinCarburant,
      this.lastressource.besoinUsm
      ],
      [{ text: 'Observation', colSpan: 5, style: 'theTh' }, '', '', '', ''],
      [{ text: this.lastressource.observation, colSpan: 5 }, '', '', '', ''],
      ]
    },


    pageOrientation: 'portrait',
  }
  const docDefinition = {
    content: [
      {
        text: 'Plan d’action des unités médicales mobiles (UMM)',
        style: 'header',
      },
      {
        text:`Année : ${this.lastpopulation.year}`,
        style:'year',
        alignment: 'center',
      },
      {
        text: 'Ministère de la Santé:',
        color: '#4087d4',
        style: 'subheader',
      },
      `Fait le : ${this.lastpopulation.createdAt}`,
      `Soumis le : ${this.lastpopulation.updatedAt}`,

      {
        text: '1- Programme prévisionnel des UMM',
        style: 'subheader',
      },
      {
        table: {
          widths: ['*', 'auto'],
          body: tableData,
        },
      },
      {
        text: '2- Population à couvrir par équipe mobile',
        style: 'subheader',
      },
      {
        table: {
          widths: ['*', 'auto'],
          body: tableData1,
        },

      },
      {
        text: '3 - Situation des moyens de mobilité',
        style: 'subheader',
      },
      myTable
    ],
    styles: {
      header: {
        fontSize: 15,
        bold: true,
        margin: [0, 10, 0, 10],

        alignment: 'center',

      },
      theTh: {

        bold: true,
        alignment: 'center',
        fillColor: '#f2f2f2',
        margin: [0, 5, 0, 5], // Optional: Adjust margins as needed
      },

      yaer:{
        fontSize: 12,

      },
      subheader: {
        fontSize: 14,
        bold: true,
        margin: [0, 10, 0, 5],
        fillColor: '#4087d4',

      },
      total: {
        fontSize: 14,
        bold: true,
        margin: [0, 10, 0, 0],
      },
      tableHeader: {
        alignment: 'left',
        fillColor: '#f2f2f2',
        border: ['solid', 'solid', 'solid', 'solid'], // Add solid border to all sides
        fontSize: 12, // Set font size to 12


      },
    },
  };

  const pdfDoc = pdfMake.createPdf(docDefinition as any);

  const downloadPDF = () => {
    pdfDoc.download('invoice.pdf');
  };

  // Attach the download function to your download button
  const downloadButton = document.getElementById('download-button');
  if (downloadButton) {
    downloadButton.addEventListener('click', downloadPDF);
  }
}




}
