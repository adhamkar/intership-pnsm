import { Component,OnInit,ViewChild,ElementRef,Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { response } from 'express';
import * as jsPDF from 'jspdf';
import { SharedDataComponent } from '../shared-data/shared-data.component';
import { MatDialog } from '@angular/material/dialog';
import{ PdfProgrammeComponent} from '../pdf-programme/pdf-programme.component'
import * as $ from 'jquery';
import{RessourcesComponent} from '../ressources/ressources.component';
import{DeleteModalMsgComponent} from '../delete-modal-msg/delete-modal-msg.component';
import { TransferDataService } from '../transfer-data.service';

@Component({
  selector: 'programme',
  templateUrl: './programme-remplire.component.html',
  styleUrls: ['./programme-remplire.component.css']
})
export class ProgrammeRemplireComponent implements OnInit{

  lastSavedData: any = null;
  loadedData: any = null;
  @ViewChild('test',{static:false}) el!:ElementRef;
  @ViewChild('myprogramme') updateData:NgForm | undefined;
  tableData: any[] = [];
  updatedTableData: any[] = [];
  isDataSaved: boolean = false;
  show:boolean=true;
  isTableVisible:boolean=false;
  myprogramme:FormGroup;
  constructor(private prg_Id:TransferDataService,private fb: FormBuilder,private router: Router,private http: HttpClient,private sharedData:SharedDataComponent,private dialog: MatDialog){
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
  ngOnInit(): void {

  }
  getProgrammeData(){
    if(this.myprogramme.valid){
      const formData=this.myprogramme.value;
      console.log(formData);
      this.http.post('http://localhost:3000/programmes', formData).subscribe(
        (response:any)=>{
          console.log('programme created:', response);
            this.isDataSaved = true;
            this.isTableVisible=false;
            this.lastSavedData = {
              programme_id: response.programme_id,
              ...formData
            };
            const programmeId = response.programme_id;
            this.prg_Id.setprogrammeId(response.programme_id)
            const lastInsertedData = {
              programme_id: response.programme_id,
              ...formData
            };
            this.tableData.push({
      programme_id:formData.programme_id,
      pdr: formData.pdr,
      distance: formData.distance,
      accessibility: formData.accessibility,

      localite: formData.localite,
      csr_id: formData.csr_id,

      year:formData.year ,

      t1: formData.t1,
      t2: formData.t2,
      t3: formData.t3,
      t4: formData.t4,
            });

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
  updateLastRecord(){
    if(this.lastSavedData){
      const formData=this.myprogramme.value;
      this.lastSavedData={
        ...this.lastSavedData,
        ...formData
      };
      this.http.patch(`http://localhost:3000/programmes/${this.lastSavedData.programme_id}`,this.lastSavedData)
      .subscribe(
          (response)=>{
            console.log('data updated',response);
            /*
                   const updatedIndex = this.tableData
                   .findIndex(item => item.programme_id === this.lastSavedData.programme_id);
                    if (updatedIndex !== -1) {
                      this.tableData[updatedIndex] = {
                        ...this.tableData[updatedIndex],
                        ...this.lastSavedData
                      };
                    }*/
                    this.updatedTableData.push({
                      programme_id:formData.programme_id,
                      pdr: formData.pdr,
                      distance: formData.distance,
                      accessibility: formData.accessibility,

                      localite: formData.localite,
                      csr_id: formData.csr_id,

                      year:formData.year ,

                      t1: formData.t1,
                      t2: formData.t2,
                      t3: formData.t3,
                      t4: formData.t4,
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
      this.http.delete(`http://localhost:3000/programmes/${this.lastSavedData.programme_id}`)
      .subscribe(
        (response)=>{
          console.log('data deleted',response);
          this.isDataSaved=false;
          this.isTableVisible=false;
          this.openDeleteModalMsg();
          this.myprogramme.reset();
        },
        (error)=>{
          console.log('error deleting data',error);
        }
      )
    }else{
          console.log('No data to delete')
    }
  }

  toggleTableVisibility() {
    this.isTableVisible = !this.isTableVisible;
  }

  onLogout(){
    localStorage.clear();
    console.log('logout successful')
    this.closeModal();
    this.router.navigate(['/home'])
  }
  changePwd(){
    this.closeModal();
    this.router.navigate(['/modiermdp'])
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
  openModal(): void {
    const dialogRef = this.dialog.open(RessourcesComponent, {
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

     openDeleteModalMsg():void{
     const deleteMsg=this.dialog.open(DeleteModalMsgComponent,{
      width: '30%',
      height: '30%',
});
deleteMsg.afterClosed().subscribe((result) => {
  this.closeModal();
});
 }




}
