import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { PlanActionComponent  } from './plan-action/plan-action.component';
import { PopulationCouvrirComponent } from './population-couvrir/population-couvrir.component';
import {ProgrammeRemplireComponent} from './programme-remplire/programme-remplire.component';
import{RessourcesComponent} from './ressources/ressources.component';
import{RessourcesHumaineComponent} from './ressources-humaine/ressources-humaine.component'

const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'planaction', component: PlanActionComponent  },
  { path: 'populationCouvrir', component: PopulationCouvrirComponent },
  { path: 'programmeRemplire', component: ProgrammeRemplireComponent },
  {path:'ressources', component: RessourcesComponent},
  {path:'ressourcesHumaine', component: RessourcesHumaineComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[
  SignupComponent,
  LoginComponent
]
