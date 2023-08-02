import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { response } from 'express';


@Component({
  selector: 'app-ressources',
  templateUrl: './ressources.component.html',
  styleUrls: ['./ressources.component.css']
})
export class RessourcesComponent implements OnInit{
  isDataSaved: boolean = false;
  myressoure:FormGroup;
  constructor(private fb: FormBuilder,private router: Router,private http: HttpClient){
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
        (response)=>{
          console.log('ressource created:', response);
            this.isDataSaved = true;
            this.myressoure.reset();
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
  onLogout(){
    localStorage.clear();
    console.log('logout successful')
    this.router.navigate(['/home'])
  }
}
