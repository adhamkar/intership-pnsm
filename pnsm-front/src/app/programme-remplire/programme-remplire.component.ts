import { Component,OnInit,ViewChild,ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { response } from 'express';
import * as jsPDF from 'jspdf';
@Component({
  selector: 'app-programme-remplire',
  templateUrl: './programme-remplire.component.html',
  styleUrls: ['./programme-remplire.component.css']
})
export class ProgrammeRemplireComponent implements OnInit{
  @ViewChild('test',{static:false}) el!:ElementRef;
  tableData: any[] = [];
  isDataSaved: boolean = false;
  myprogramme:FormGroup;
  constructor(private fb: FormBuilder,private router: Router,private http: HttpClient){
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
      const formData=this.myprogramme.value
      console.log(formData);
      this.http.post('http://localhost:3000/programmes', formData).subscribe(
        (response)=>{
          console.log('programme created:', response);
            this.isDataSaved = true;
            this.tableData.push({
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
      this.myprogramme.reset();
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
  onLogout(){
    localStorage.clear();
    console.log('logout successful')
    this.router.navigate(['/home'])
  }
  changePwd(){
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
        pdf.save("table.pdf")
      }
    })
  }
}
