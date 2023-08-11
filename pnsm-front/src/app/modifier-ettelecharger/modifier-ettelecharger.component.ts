import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { response } from 'express';
import { SharedButtonServiceComponent } from '../shared-button-service/shared-button-service.component';

@Component({
  selector: 'app-modifier-ettelecharger',
  templateUrl: './modifier-ettelecharger.component.html',
  styleUrls: ['./modifier-ettelecharger.component.css']
})
export class ModifierETtelechargerComponent implements OnInit {
  cliecked:boolean=false;
  cliecked1:boolean=false;
  cliecked2:boolean=false;
  cliecked3:boolean=false;
  constructor(private sharedButtonService: SharedButtonServiceComponent,private sharedButtonService1: SharedButtonServiceComponent,private sharedButtonService2: SharedButtonServiceComponent,private sharedButtonService3: SharedButtonServiceComponent){}

  ngOnInit(): void {
    this.cliecked = this.sharedButtonService.getButtonClicked();
    this.cliecked1 = this.sharedButtonService1.getButtonClicked();
    this.cliecked2 = this.sharedButtonService2.getButtonClicked();
    this.cliecked3 = this.sharedButtonService3.getButtonClicked();
  }
onclick(){
this.cliecked=true;
this.sharedButtonService.setButtonClicked(true);
}
onclick1(){
  this.cliecked1=true;
this.sharedButtonService1.setButtonClicked(true);
}
onclick2(){
  this.cliecked2=true;
this.sharedButtonService2.setButtonClicked(true);
}
onclick3(){
  this.cliecked3=true;
this.sharedButtonService3.setButtonClicked(true);
}
}
