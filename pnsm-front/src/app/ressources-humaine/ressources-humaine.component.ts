import { Component,OnInit ,ElementRef, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { response } from 'express';
import * as jsPDF from 'jspdf';
import { MatDialog,MatDialogRef  } from '@angular/material/dialog';
@Component({
  selector: 'app-ressources-humaine',
  templateUrl: './ressources-humaine.component.html',
  styleUrls: ['./ressources-humaine.component.css']
})
export class RessourcesHumaineComponent implements OnInit{
  updatedTableData: any[] = [];
  isTableVisible:boolean=false;
  lastSavedData: any = null;
  @ViewChild('test',{static:false}) el!:ElementRef
  tableData: any[] = [];
  isDataSaved: boolean = false;
  myRh:FormGroup;
  constructor(private dialog: MatDialog,private fb: FormBuilder,private router: Router,private http: HttpClient){
    this.myRh=this.fb.group({
      year: ['', Validators.required],
      trimestre:['', Validators.required],
      sortie_id:['', Validators.required],

      fixe_id: ['', Validators.required],
      fixe_medecin: ['', Validators.required],
      fixe_infermier: ['', Validators.required],
      fixe_sageFemme: ['', Validators.required],
      fixe_chauffeur: ['', Validators.required],
      fixe_technicien: ['', Validators.required],
      fixe_appuie: ['', Validators.required],

      mobile_id: ['', Validators.required],
      mobile_medecin: ['', Validators.required],
      mobile_infermier: ['', Validators.required],
      mobile_sageFemme: ['', Validators.required],
      mobile_chauffeur: ['', Validators.required],
      mobile_appuie: ['', Validators.required],

      mobile_technicien: ['', Validators.required],
      mobile_emOperationnelle: ['', Validators.required],
      csr_id: ['', Validators.required],
      emOperationnelle: ['', Validators.required],
      ressourcesHumaineMobilise_id:['', Validators.required],
      ressourcesHumaineMobilise_medecin: ['', Validators.required],

      ressourcesHumaineMobilise_infermier: ['', Validators.required],
      ressourcesHumaineMobilise_sageFemme: ['', Validators.required],
      ressourcesHumaineMobilise_chauffeur: ['', Validators.required],
      ressourcesHumaineMobilise_appuie: ['', Validators.required],
      ressourcesHumaineMobilise_technicien: ['', Validators.required],

    })
  }
  getRHData(){
    if(this.myRh.valid){
      const formData=this.myRh.value
      console.log(formData);
      this.http.post('http://localhost:3000/ressourceHumaines', formData).subscribe(
        (response:any)=>{
          console.log('RH created:', response);
          this.isDataSaved = true;
          this.isTableVisible=false;
          this.lastSavedData = {
            ressourceHumaine_id: response.ressourceHumaine_id,
            ...formData
          };
            this.tableData.push({
              year: formData.year,
              trimestre: formData.trimestre,
              sortie_id:formData.sortie_id,

              fixe_id:formData.fixe_id,
              fixe_medecin:formData.fixe_medecin,
              fixe_infermier:formData.fixe_infermier,
              fixe_sageFemme:formData.fixe_sageFemme,
              fixe_technicien:formData.fixe_technicien,
              fixe_chauffeur:formData.fixe_chauffeur,
              fixe_appuie:formData.fixe_appuie,

              mobile_id:formData.mobile_id,
              mobile_medecin:formData.mobile_medecin,

              mobile_infermier:formData.mobile_infermier,
              mobile_chauffeur:formData.mobile_chauffeur,
              mobile_appuie:formData.mobile_appuie,

              mobile_technicien:formData.mobile_technicien,
              mobile_emOperationnelle:formData.mobile_emOperationnelle,
              csr_id:formData.csr_id,
              emOperationnelle:formData.emOperationnelle,
              ressourcesHumaineMobilise_id:formData.ressourcesHumaineMobilise_id,
              ressourcesHumaineMobilise_medecin:formData.ressourcesHumaineMobilise_medecin,
              ressourcesHumaineMobilise_infermier:formData.ressourcesHumaineMobilise_infermier,
              ressourcesHumaineMobilise_sageFemme:formData.ressourcesHumaineMobilise_sageFemme,
              ressourcesHumaineMobilise_chauffeur:formData.ressourcesHumaineMobilise_chauffeur,
              ressourcesHumaineMobilise_appuie:formData.ressourcesHumaineMobilise_appuie,
              ressourcesHumaineMobilise_technicien:formData.ressourcesHumaineMobilise_technicien,

            });

        },
        (error) => {
          console.error('Error creating RH:', error);
          console.log('Detailed error:', error.error);
        }
      )
    }else{
      console.log('Form is invalid. Please fill in all required fields.');
    }
  }
  updateLastRecord(){
    if(this.lastSavedData){
      const formData=this.myRh.value;
      this.lastSavedData={
        ...this.lastSavedData,
        ...formData
      };
      this.http.patch(`http://localhost:3000/ressourceHumaines/${this.lastSavedData.ressourceHumaine_id}`,this.lastSavedData)
      .subscribe(
          (response)=>{
            console.log('data updated',response);

                    this.updatedTableData.push({
                      year: formData.year,
                      trimestre: formData.trimestre,
                      sortie_id:formData.sortie_id,

                      fixe_id:formData.fixe_id,
                      fixe_medecin:formData.fixe_medecin,

                      fixe_infermier:formData.fixe_infermier,
                      fixe_sageFemme:formData.fixe_sageFemme,
                      fixe_technicien:formData.fixe_technicien,
                      fixe_chauffeur:formData.fixe_chauffeur,
                      fixe_appuie:formData.fixe_appuie,

                      mobile_id:formData.mobile_id,
                      mobile_medecin:formData.mobile_medecin,

                      mobile_infermier:formData.mobile_infermier,
                      mobile_chauffeur:formData.mobile_chauffeur,
                      mobile_appuie:formData.mobile_appuie,

                      mobile_technicien:formData.mobile_technicien,
                      mobile_emOperationnelle:formData.mobile_emOperationnelle,
                      csr_id:formData.csr_id,
                      emOperationnelle:formData.emOperationnelle,
                      ressourcesHumaineMobilise_id:formData.ressourcesHumaineMobilise_id,
                      ressourcesHumaineMobilise_medecin:formData.ressourcesHumaineMobilise_medecin,
                      ressourcesHumaineMobilise_infermier:formData.ressourcesHumaineMobilise_infermier,
                      ressourcesHumaineMobilise_sageFemme:formData.ressourcesHumaineMobilise_sageFemme,
                      ressourcesHumaineMobilise_chauffeur:formData.ressourcesHumaineMobilise_chauffeur,
                      ressourcesHumaineMobilise_appuie:formData.ressourcesHumaineMobilise_appuie,
                      ressourcesHumaineMobilise_technicien:formData.ressourcesHumaineMobilise_technicien,

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
      this.http.delete(`http://localhost:3000/ressourceHumaines/${this.lastSavedData.ressourceHumaine_id}`)
      .subscribe(
        (response)=>{
          console.log('data deleted',response);
          this.isDataSaved=false;
          this.isTableVisible=false;
          this.myRh.reset();
        },
        (error)=>{
          console.log('error deleting data',error);
        }
      )

    }else{
          console.log('No data to delete')
    }
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
  ngOnInit(): void {

  }
  downloadTableAsPDF(){
    let pdf=new jsPDF.default("l","pt","a3",true);

    pdf.html(this.el.nativeElement,{
      callback: (pdf:any)=>{
        pdf.save("table.pdf")
      }
    })

  }
  closeModal():void{
    const close=this.dialog.closeAll()
     }
}
