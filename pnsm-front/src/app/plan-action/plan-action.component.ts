import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'plan-action',
  templateUrl: './plan-action.component.html',
  styleUrls: ['./plan-action.component.css']
})
export class PlanActionComponent implements OnInit{
  constructor(private router:Router){

  }
  ngOnInit(): void {
  }
  onclick(){
    this.router.navigate(['/modifierETtelecharger']);
  }
  onclick1(){
    this.router.navigate(['/rapport']);
  }
}
