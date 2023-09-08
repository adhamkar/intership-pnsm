import { Component,OnInit, ElementRef, HostListener, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { response } from 'express';
import{PopulationDataService} from './populationService.component'
import { MatTableDataSource } from '@angular/material/table';
import * as jsPDF from 'jspdf';
import {  autoTable,UserOptions } from 'jspdf-autotable';

import { SharePopulationDataComponent } from '../share-population-data/share-population-data.component';
interface TableDataRow {
  populationType: string;
  populationValue: number;
  population_habitantMoins3km: number;
  population_habitantEntre3km6km: number;
  population_habitantEntre6km10km: number;
  population_habitantPlus10km: number;
  population_cible: number;
  distanceMoyenneRouteProche: number;
  enfant_id: number;
  enfant_naissancesAttendues: number;
  enfant_moins1ans: number;
  enfant_moins5ans: number;
  femme_id: number;
  femme_far: number;
  femme_fmar: number;
  femme_femmeEnceinte: number;
  createdAt: Date;
  updatedAt: Date;
}

@Component({
  selector: 'app-population-couvrir',
  templateUrl: './population-couvrir.component.html',
  styleUrls: ['./population-couvrir.component.css']
})
export class PopulationCouvrirComponent implements OnInit {
  importedData: any[] = [

  ];
  @ViewChild('test',{static:false}) el!:ElementRef;
  lastSavedData: any = null;
  isDataSaved: boolean = false;
  isTableVisible:boolean = false;
  isVisible:boolean = false;
  populations:any;
  myForm: FormGroup;
  myprogramme:FormGroup;
  tableData: any[] = [];
  buttonClicked = false;
  updatedTableData: any[] = [];


  constructor(private fb: FormBuilder,private router: Router,private http: HttpClient,private sharedData:SharePopulationDataComponent){
    this.myForm = this.fb.group({
      population_rurale: ['', Validators.required],
      population_habitantMoins3km: ['', Validators.required],
      population_habitantEntre3km6km: ['', Validators.required],

      population_habitantEntre6km10km: ['', Validators.required],
      population_habitantPlus10km: ['', Validators.required],
      population_cible: ['', Validators.required],

      distanceMoyenneRouteProche: ['', Validators.required],
      enfant_id: ['', Validators.required],

      enfant_naissancesAttendues: ['', Validators.required],
      enfant_moins1ans: ['', Validators.required],
      enfant_moins5ans: ['', Validators.required],

      femme_id: ['', Validators.required],
      femme_far: ['', Validators.required],
      femme_fmar: ['', Validators.required],

      femme_femmeEnceinte: ['', Validators.required],
      createdAt: ['', Validators.required],
      updatedAt: ['', Validators.required],
    })
    this.myprogramme=this.fb.group({
      pdr: ['', Validators.required],
      distance: ['', Validators.required],
      accessibility: ['', Validators.required],

      localite: ['', Validators.required],
      csr_id: ['', Validators.required],
      year: ['', Validators.required],

      t1: ['', Validators.required],
      t2: ['', Validators.required],
      t3: ['', Validators.required],
      t4: ['', Validators.required],
    })

  }
  saveImportedData() {
    this.sharedData.setData(this.importedData);
  }
  getPopulationData() {
    if (this.myForm.valid) {
      const formData = this.myForm.value
      console.log(formData);
      this.http.post('http://localhost:3000/populations', formData).subscribe(
        (response:any) => {
          console.log('Population created:', response);
          this.isDataSaved = true;
          this.isTableVisible=false;
            this.lastSavedData = {
              population_id: response.population_id,
              ...formData
            };
          this.tableData.push({
            population_rurale: formData.population_rurale,
            population_habitantMoins3km: formData.population_habitantMoins3km,
            population_habitantEntre3km6km:formData.population_habitantEntre3km6km,

            population_habitantEntre6km10km:formData.population_habitantEntre6km10km,
            population_habitantPlus10km:formData.population_habitantPlus10km,

            population_cible:formData.population_cible,
            distanceMoyenneRouteProche:formData.distanceMoyenneRouteProche,
            enfant_id:formData.enfant_id,

            enfant_naissancesAttendues:formData.enfant_naissancesAttendues,
            enfant_moins1ans:formData.enfant_moins1ans,
            enfant_moins5ans:formData.enfant_moins5ans,

            femme_id:formData.femme_id,
            femme_far:formData.femme_far,
            femme_fmar:formData.femme_fmar,

            femme_femmeEnceinte:formData.femme_femmeEnceinte,
            createdAt:formData.createdAt,
            updatedAt:formData.updatedAt,

          });
          this.sharedData.setData(this.tableData);
        },
        (error) => {
          console.error('Error creating population:', error);
          console.log('Detailed error:', error.error);
        }
      );
    } else {
      console.log('Form is invalid. Please fill in all required fields.');
    }
  }
  updateLastRecord(){
    if(this.lastSavedData){
      const formData=this.myForm.value;
      this.lastSavedData={
        ...this.lastSavedData,
        ...formData
      };
      this.http.patch(`http://localhost:3000/populations/${this.lastSavedData.population_id}`,this.lastSavedData)
      .subscribe(
        (response)=>{
          console.log('data updated',response);
          this.updatedTableData.push({
            population_rurale: formData.population_rurale,
            population_habitantMoins3km: formData.population_habitantMoins3km,
            population_habitantEntre3km6km:formData.population_habitantEntre3km6km,

            population_habitantEntre6km10km:formData.population_habitantEntre6km10km,
            population_habitantPlus10km:formData.population_habitantPlus10km,

            population_cible:formData.population_cible,
            distanceMoyenneRouteProche:formData.distanceMoyenneRouteProche,
            enfant_id:formData.enfant_id,

            enfant_naissancesAttendues:formData.enfant_naissancesAttendues,
            enfant_moins1ans:formData.enfant_moins1ans,
            enfant_moins5ans:formData.enfant_moins5ans,

            femme_id:formData.femme_id,
            femme_far:formData.femme_far,
            femme_fmar:formData.femme_fmar,

            femme_enceinte:formData.femme_enceinte,
            createdAt:formData.createdAt,
            updatedAt:formData.updatedAt,
          });
          console.log('Updated Table Data:', this.updatedTableData);
          this.isDataSaved=true;
          this.isTableVisible=true;
        },(error)=>{
          console.log('cannot update data',error);
        }
      )
    }else{
      console.log('No data available to update.');
    }
  }
  ngOnInit(): void {
  }
  onLogout(){
    localStorage.clear();
    console.log('logout successful');
    this.closeModal();
    this.router.navigate(['/home'])
  }
  changePwd(){
    this.closeModal();
    this.router.navigate(['/modiermdp'])
  }

  onClick() {
    this.buttonClicked = true;
  }


  /*
  downloadTableAsPDF() {
    const doc = new jsPDF.default(); // Initialize jsPDF as a constructor
    const columns = [

      { header: '2', dataKey: 'population_rurale' },
      { header: '3', dataKey: 'population_habitantMoins3km' },
      { header: '1', dataKey: 'population_habitantEntre3km6km' },
      { header: '4', dataKey: 'population_habitantEntre6km10km' },
      { header: '5', dataKey: 'population_habitantPlus10km' },
      { header: '6', dataKey: 'apopulation_ciblege' },
      { header: '7', dataKey: 'distanceMoyenneRouteProche' },
      { header: '8', dataKey: 'enfant_id' },
      { header: '9', dataKey: 'enfant_naissancesAttendues' },
      { header: '99', dataKey: 'enfant_moins1ans' },
      { header: '88', dataKey: 'enfant_moins5ans' },
      { header: '77', dataKey: 'femme_id' },
      { header: '76', dataKey: 'femme_far' },
      { header: 'femme_fmar', dataKey: 'femme_fmar' },
      { header: 'femme_enceinte', dataKey: 'femme_enceinte' },
      { header: 'updatedAt', dataKey: 'createdAt' },
      { header: 'updatedAt', dataKey: 'updatedAt' },
    ];

    const data = this.tableData.map((item) => ({
      population_rurale: item.population_rurale,
      population_habitantMoins3km: item.population_habitantMoins3km,
      population_habitantEntre3km6km: item.population_habitantEntre3km6km,
      name: item.population_rurale,
      population_habitantEntre6km10km: item.population_habitantEntre6km10km,
      population_habitantPlus10km: item.population_habitantPlus10km,
      population_cible: item.population_cible,
      distanceMoyenneRouteProche: item.distanceMoyenneRouteProche,
      enfant_id: item.enfant_id,
      enfant_naissancesAttendues: item.enfant_naissancesAttendues,
      enfant_moins1ans: item.enfant_moins1ans,
      enfant_moins5ans: item.enfant_moins5ans,
      femme_id: item.femme_id,
      femme_far: item.femme_far,
      femme_fmar: item.femme_fmar,
      femme_enceinte: item.femme_enceinte,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
    }));

    doc.autoTable({
      head: columns,
      body: data,
    });

    doc.save('data-table.pdf');
  } */
/*
  downloadTableAsPDF() {
    const doc = new jsPDF();
    const tableData: TableDataRow[] = this.tableData

    // Prepare the data for the table
    const data: any[] = [];
    for (const item of tableData) {
      data.push([
        item.populationType, // The first column value (Population)
        item.populationValue, // The second column value (Valeur)
      ]);

      data.push([
        "les habitants de moins de 3km",
        item.population_habitantMoins3km,
      ]);

      data.push([
        "les habitants entre 3km et 6km",
        item.population_habitantEntre3km6km,
      ]);

      data.push([
        "les habitants entre 6km et 10km",
        item.population_habitantEntre6km10km,
      ]);

      data.push([
        "les habitants de plus de 10km",
        item.population_habitantPlus10km,
      ]);

      data.push([
        "Population Cible",
        item.population_cible,
      ]);

      data.push([
        "Distance Moyenne la plus Route Proche",
        item.distanceMoyenneRouteProche,
      ]);

      data.push([
        "Enfant id",
        item.enfant_id,
      ]);

      data.push([
        "Naissances Attendues",
        item.enfant_naissancesAttendues,
      ]);

      data.push([
        "Enfant moins de 1ans",
        item.enfant_moins1ans,
      ]);

      data.push([
        "Enfant moins de 5ans",
        item.enfant_moins5ans,
      ]);

      data.push([
        "Femme id",
        item.femme_id,
      ]);

      data.push([
        "Femme far",
        item.femme_far,
      ]);

      data.push([
        "Femmes fmar",
        item.femme_fmar,
      ]);

      data.push([
        "Femmes Enceintes",
        item.femme_femmeEnceinte,
      ]);

      data.push([
        "Date de cration",
        item.createdAt.toISOString(),
      ]);

      data.push([
        "La mise à jour",
        item.updatedAt.toISOString(),
      ]);
    }

    // Set up the table configuration
    const tableConfig: UserOptions = {
      head: [['Population', 'Valeur']], // Header row
      body: data, // Data rows
    };

    // Generate the table using autoTable
    doc.autoTable(tableConfig);

    // Save the PDF
    doc.save('data-table.pdf');
  }
*/

downloadTableAsPDF(){
  let pdf=new jsPDF.default("l","pt","a3",true);
  pdf.html(this.el.nativeElement,{
    callback: (pdf:any)=>{
      pdf.save("table.pdf")
    }
  })
}

  private getPopulationType(data:any){
if(data.hasOwnProperty('populationType')){
  return data.populationType;
}else{
  return '';
}
  }

  private getTableData(): any[][] {
    // Convert your tableData to a 2D array containing the data to display in the table
    const tableData: any[][] = [];
    this.tableData.forEach((row: any) => {
      tableData.push([row.name, row.age]);
    });
    return tableData;
  }

  getProgrammeData(){
    if(this.myprogramme.valid){
      const formData=this.myprogramme.value
      console.log(formData);
      this.http.post('http://localhost:3000/programmes', formData).subscribe(
        (response)=>{
          console.log('programme created:', response);
            this.isVisible = true;
            this.myForm.reset();
        },
        (error) => {
          console.error('Error creating population:', error);
          console.log('Detailed error:', error.error);
        }
      )
    }else{
      console.log('Form is invalid. Please fill in all required fields.');
    }
  }

  openModal(): void {
    const dialogRef = this.dialog.open(ProgrammeRemplireComponent, {
      width: '80%',
      height: '80%',
    });


    dialogRef.afterClosed().subscribe((result) => {
      this.closeModal();
    });
  }
 closeModal():void{
const close=this.dialog.closeAll()
 }

}
