import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { response } from 'express';
import { SharedButtonServiceComponent } from '../shared-button-service/shared-button-service.component';
import{ProgrammeRemplireComponent} from '../programme-remplire/programme-remplire.component';
import { MatDialog } from '@angular/material/dialog';
import{PopulationCouvrirComponent} from '../population-couvrir/population-couvrir.component';
import{RessourcesComponent} from '../ressources/ressources.component';
import{RessourcesHumaineComponent} from '../ressources-humaine/ressources-humaine.component'
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
  constructor(private dialog: MatDialog,private sharedButtonService: SharedButtonServiceComponent,private sharedButtonService1: SharedButtonServiceComponent,private sharedButtonService2: SharedButtonServiceComponent,private sharedButtonService3: SharedButtonServiceComponent){}

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
openModal(): void {
  const dialogRef = this.dialog.open(ProgrammeRemplireComponent, {
    width: '80%',
    height: '80%',
    // You can pass any necessary data to the modal using the `data` option
  });

  dialogRef.afterClosed().subscribe((result) => {
    // Handle any actions after the modal is closed (if needed)
  });
}
openModal1(): void {
  const dialogRef = this.dialog.open(PopulationCouvrirComponent, {
    width: '80%',
    height: '80%',
    // You can pass any necessary data to the modal using the `data` option
  });

  dialogRef.afterClosed().subscribe((result) => {
    // Handle any actions after the modal is closed (if needed)
  });
}
openModal2(): void {
  const dialogRef = this.dialog.open(RessourcesComponent, {
    width: '80%',
    height: '80%',
    // You can pass any necessary data to the modal using the `data` option
  });

  dialogRef.afterClosed().subscribe((result) => {
    // Handle any actions after the modal is closed (if needed)
  });
}
openModal3(): void {
  const dialogRef = this.dialog.open(RessourcesHumaineComponent, {
    width: '80%',
    height: '80%',
    // You can pass any necessary data to the modal using the `data` option
  });

  dialogRef.afterClosed().subscribe((result) => {
    // Handle any actions after the modal is closed (if needed)
  });
}
}
