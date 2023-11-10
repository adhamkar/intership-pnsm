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
  cliecked:boolean=false;
  
  constructor(private router:Router){

  }
  ngOnInit(): void {
  }
  onclick(){
    this.router.navigate(['/modifierETtelecharger']);
  }
  goToLink(url: string){
    window.open(url, "_blank");
}
  onclick1(){
    this.router.navigate(['/compteRendu']);
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
}
