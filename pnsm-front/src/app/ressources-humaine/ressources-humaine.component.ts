import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { response } from 'express';


@Component({
  selector: 'app-ressources-humaine',
  templateUrl: './ressources-humaine.component.html',
  styleUrls: ['./ressources-humaine.component.css']
})
export class RessourcesHumaineComponent implements OnInit{
  isDataSaved: boolean = false;
  myRh:FormGroup;
  constructor(private fb: FormBuilder,private router: Router,private http: HttpClient){
    this.myRh=this.fb.group({
      year: ['', Validators.required],
      trimestre:['', Validators.required],
      sortie_id:['', Validators.required],

      fixe_id: ['', Validators.required],
      fixe_medecin: ['', Validators.required],
      fixe_infermier: ['', Validators.required],
      fixe_sageFemme: ['', Validators.required],
      fixe_chauffeur: ['', Validators.required],
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
        (response)=>{
          console.log('RH created:', response);
            this.isDataSaved = true;
            this.myRh.reset();
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
  onLogout(){
    localStorage.clear();
    console.log('logout successful')
    this.router.navigate(['/home'])
  }
  ngOnInit(): void {

  }
}
