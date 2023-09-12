import { Component,OnInit,ViewChild,ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { response } from 'express';
import * as jsPDF from 'jspdf';
import{RessourcesHumaineComponent} from '../ressources-humaine/ressources-humaine.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-ressources',
  templateUrl: './ressources.component.html',
  styleUrls: ['./ressources.component.css']
})
export class RessourcesComponent implements OnInit{

  updatedTableData: any[] = [];
  isTableVisible:boolean=false;
  lastSavedData: any = null;
  hide: boolean = false;
  @ViewChild('test',{static:false}) el!:ElementRef;
  tableData: any[] = []
  isDataSaved: boolean = false;
  myressoure:FormGroup;
  constructor(private dialog: MatDialog,private fb: FormBuilder,private router: Router,private http: HttpClient){
    this.myressoure=this.fb.group({
      year: ['', Validators.required],
      vehicule_id: ['', Validators.required],
      vehicule_type: ['', Validators.required],

      vehicule_age: ['', Validators.required],
      budget_id: ['', Validators.required],
      budget_besoinCarburant: ['', Validators.required],

      budget_KmsParcourus: ['', Validators.required],
      besoinUsm: ['', Validators.required],
      observation: ['', Validators.required],
      csr_id: ['', Validators.required],
    })
  }
  ngOnInit(): void {
  }
  getRessourcesData(){
    if(this.myressoure.valid){
      const formData=this.myressoure.value
      console.log(formData);
      this.http.post('http://localhost:3000/ressources', formData).subscribe(
        (response:any)=>{
          console.log('ressource created:', response);
            this.isDataSaved = true;
            this.lastSavedData = {
              ressource_id: response.ressource_id,
              ...formData
            };
            this.tableData.push({
              year: formData.year,
              vehicule_id: formData.vehicule_id,
              vehicule_type: formData.vehicule_type,

              vehicule_age: formData.vehicule_age,
              budget_id: formData.budget_id,

              budget_KmsParcourus:formData.budget_KmsParcourus ,

              besoinUsm: formData.besoinUsm,
              observation: formData.observation,
              csr_id: formData.csr_id,

                    });

        },
        (error) => {
          console.error('Error creating ressource:', error);
          console.log('Detailed error:', error.error);
        }
      )
    }else{
      console.log('Form is invalid. Please fill in all required fields.');
    }
  }
  
  updateLastRecord(){
    if(this.lastSavedData){
      const formData=this.myressoure.value;
      this.lastSavedData={
        ...this.lastSavedData,
        ...formData
      };
      this.http.patch(`http://localhost:3000/ressources/${this.lastSavedData.ressource_id}`,this.lastSavedData)
      .subscribe(
          (response)=>{
            console.log('data updated',response);

                    this.updatedTableData.push({
                      year: formData.year,
                      vehicule_id: formData.vehicule_id,
                      vehicule_type: formData.vehicule_type,

                      vehicule_age: formData.vehicule_age,
                      budget_id: formData.budget_id,

                      budget_KmsParcourus:formData.budget_KmsParcourus ,

                      besoinUsm: formData.besoinUsm,
                      observation: formData.observation,
                      csr_id: formData.csr_id,
                            });
                            console.log('Updated Table Data:', this.updatedTableData);
          this.isDataSaved=true;
          this.isTableVisible=true;
          },
          (error)=>{
            console.log('cannot update data',error);
          }
);
    }else{
      console.log('No data available to update.');
    }
  }

  DeleteLastData(){
    if(this.lastSavedData){
      this.http.delete(`http://localhost:3000/ressources/${this.lastSavedData.ressource_id}`)
      .subscribe(
        (response)=>{
          console.log('data deleted',response);
          this.isDataSaved=false;
          this.isTableVisible=false;
          //this.openDeleteModalMsg();
          this.callIT();
          this.myressoure.reset();
        },
        (error)=>{
          console.log('error deleting data',error);
        }
      )

    }else{
          console.log('No data to delete')
    }
  }
  callIT(){
    const alertHTML = this.generateAlertHTML();
    const element = document.getElementById('dynamicContent');
    if (element) {
      element.innerHTML = alertHTML;
      setTimeout(() => {
        element.innerHTML = '';
      }, 2000);
    }
  }

   generateAlertHTML(): string {
    return `
      <div class="alert alert-warning d-flex align-items-center" role="alert">
        <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Warning:">
          <use xlink:href="#exclamation-triangle-fill"/>
        </svg>
        <div>
          Veuillez Remplir d'abord le forum precedent
        </div>
      </div>
    `;
  }
  editRessourcesData(){
    if(this.myressoure.valid){
      const formData=this.myressoure.value;
      console.log(formData);
      const resourceIdToUpdate=formData.resourceIdToUpdate;
      this.http.patch('http://localhost:3000/ressources',formData).subscribe(

      )
    }else{
      console.log('Form is invalid. Please fill in all required fields.');
    }
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
  downloadTableAsPDF(){
    let pdf=new jsPDF.default("l","pt","a3",true);
    pdf.html(this.el.nativeElement,{
      callback: (pdf:any)=>{
        pdf.save("table.pdf")
      }
    })
  }
  openModal(): void {
    const dialogRef = this.dialog.open(RessourcesHumaineComponent, {
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
