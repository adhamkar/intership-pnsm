import { Component,OnInit ,ViewChild, ElementRef, Renderer2} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { response } from 'express';
import { SharedButtonServiceComponent } from '../shared-button-service/shared-button-service.component';
import{ProgrammeRemplireComponent} from '../programme-remplire/programme-remplire.component';
import { MatDialog } from '@angular/material/dialog';
import{PopulationCouvrirComponent} from '../population-couvrir/population-couvrir.component';
import{RessourcesComponent} from '../ressources/ressources.component';
import{RessourcesHumaineComponent} from '../ressources-humaine/ressources-humaine.component';
import { PrecedentComponent } from '../precedent/precedent.component';

@Component({
  selector: 'app-modifier-ettelecharger',
  templateUrl: './modifier-ettelecharger.component.html',
  styleUrls: ['./modifier-ettelecharger.component.css']
})
export class ModifierETtelechargerComponent implements OnInit {
  @ViewChild('dynamicContent', { static: true }) dynamicContent: ElementRef | undefined;
  cliecked:boolean=false;
  cliecked1:boolean=false;
  cliecked2:boolean=false;
  cliecked3:boolean=false;
  clickedRow: boolean = false;
  clickedRow1: boolean = false
  clickedRow2: boolean = false;
  clickedRow3: boolean = false;
   one:boolean=false;
   two:boolean=false;
   three:boolean=false;
   four:boolean=false;
  renderer: any;
  constructor(private router:Router, private dialog: MatDialog,private sharedButtonService: SharedButtonServiceComponent,private sharedButtonService1: SharedButtonServiceComponent,private sharedButtonService2: SharedButtonServiceComponent,private sharedButtonService3: SharedButtonServiceComponent){}

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
  if(this.clickedRow){
    this.clickedRow1=true;
    setTimeout(() => {
      this.two = true;
    }, 1000);
    const dialogRef = this.dialog.open(ProgrammeRemplireComponent, {
      width: '80%',
      height: '80%',
      // You can pass any necessary data to the modal using the `data` option
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Handle any actions after the modal is closed (if needed)
    });
  }
  else{

    const alertHTML = this.generateAlertHTML();
    const element = document.getElementById('dynamicContent');
    if (element) {
      element.innerHTML = alertHTML;
      setTimeout(() => {
        element.innerHTML = '';
      }, 2000);
    }


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

openModal1(): void {
  this.clickedRow=true;
  setTimeout(() => {
    this.one = true;
  }, 1000);
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
  if(this.clickedRow1){
    this.clickedRow2=true;
    setTimeout(() => {
      this.three = true;
    }, 1000);
    const dialogRef = this.dialog.open(RessourcesComponent, {
      width: '80%',
      height: '80%',
      // You can pass any necessary data to the modal using the `data` option
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Handle any actions after the modal is closed (if needed)
    });
  }else{

    const alertHTML = this.generateAlertHTML();
    const element = document.getElementById('dynamicContent');
    if (element) {
      element.innerHTML = alertHTML;
      setTimeout(() => {
        element.innerHTML = '';
      }, 2000);
    }


  }

}
openModal3(): void {
  if(this.clickedRow2){
    this.clickedRow3=true;
    setTimeout(() => {
      this.four = true;
    }, 1000);
    const dialogRef = this.dialog.open(RessourcesHumaineComponent, {
      width: '80%',
      height: '80%',
      // You can pass any necessary data to the modal using the `data` option
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Handle any actions after the modal is closed (if needed)
    });
  }else{

    const alertHTML = this.generateAlertHTML();
    const element = document.getElementById('dynamicContent');
    if (element) {
      element.innerHTML = alertHTML;
      setTimeout(() => {
        element.innerHTML = '';
      }, 2000);
    }


  }

}
modal(){
  const dialogRef = this.dialog.open(PrecedentComponent, {


    // You can pass any necessary data to the modal using the `data` option
  });

  dialogRef.afterClosed().subscribe((result) => {
    // Handle any actions after the modal is closed (if needed)
  });
}
ToCompteRendu(){
this.router.navigate(['/compteRendu'])
}
}
