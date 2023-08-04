import { Component,OnInit, ElementRef, HostListener, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { response } from 'express';
import{PopulationDataService} from './populationService.component'
import { MatTableDataSource } from '@angular/material/table';
const jsPDF = require('jspdf');
import 'jspdf-autotable';

@Component({
  selector: 'app-population-couvrir',
  templateUrl: './population-couvrir.component.html',
  styleUrls: ['./population-couvrir.component.css']
})
export class PopulationCouvrirComponent implements OnInit {

  isDataSaved: boolean = false;
  isVisible:boolean = false;
  populations:any;
  myForm: FormGroup;
  myprogramme:FormGroup;
  tableData: any[] = [];

  constructor(private fb: FormBuilder,private router: Router, private populationData:PopulationDataService,private http: HttpClient){
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
  getPopulationData() {
    if (this.myForm.valid) {
      const formData = this.myForm.value
      console.log(formData);
      this.http.post('http://localhost:3000/populations', formData).subscribe(
        (response) => {
          console.log('Population created:', response);
          this.isDataSaved = true;
          this.tableData.push({ population_rurale: formData.population_rurale,
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





  ngOnInit(): void {
  }
  onLogout(){
    localStorage.clear();
    console.log('logout successful')
    this.router.navigate(['/home'])
  }
  changePwd(){
    this.router.navigate(['/modiermdp'])
  }
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

}
