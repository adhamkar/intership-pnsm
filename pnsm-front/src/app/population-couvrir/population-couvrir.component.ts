import { Component,OnInit, ElementRef, HostListener, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { response } from 'express';
import{PopulationDataService} from './populationService.component'

@Component({
  selector: 'app-population-couvrir',
  templateUrl: './population-couvrir.component.html',
  styleUrls: ['./population-couvrir.component.css']
})
export class PopulationCouvrirComponent implements OnInit {

  isAtEndOfPage: boolean = false;
  isDataSaved: boolean = false;
  isVisible:boolean = false;
  populations:any;
  myForm: FormGroup;
  myprogramme:FormGroup;
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
  getPopulationData() {
    if (this.myForm.valid) {
      const formData = this.myForm.value// Get the form data as a plain object without validation
      console.log(formData);
      this.http.post('http://localhost:3000/populations', formData).subscribe(
        (response) => {
          console.log('Population created:', response);
          this.isDataSaved = true;
          // Optionally, you can reset the form after successful submission
          this.myForm.reset();
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
}
