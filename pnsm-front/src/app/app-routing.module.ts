import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { PlanActionComponent  } from './plan-action/plan-action.component';
import { PopulationCouvrirComponent } from './population-couvrir/population-couvrir.component';
import {ProgrammeRemplireComponent} from './programme-remplire/programme-remplire.component';
import{RessourcesComponent} from './ressources/ressources.component';
import{RessourcesHumaineComponent} from './ressources-humaine/ressources-humaine.component';
import{AboutUsComponent} from './about-us/about-us.component';
import { PasswordChangeComponent } from './password-change/password-change.component';
import { ModifierETtelechargerComponent } from './modifier-ettelecharger/modifier-ettelecharger.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RapportComponent } from './rapport/rapport.component';
import{PdfProgrammeComponent} from './pdf-programme/pdf-programme.component';
import{DeleteModalMsgComponent} from './delete-modal-msg/delete-modal-msg.component';
import{CompteRenduComponent} from './compte-rendu/compte-rendu.component';
import{PrecedentComponent} from './precedent/precedent.component'
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
  {path:'aboutus',component: AboutUsComponent},
  {path:'modiermdp',component: PasswordChangeComponent},
  {path:'modifierETtelecharger',component: ModifierETtelechargerComponent},
  {path:'contact',component: ContactUsComponent},
  {path:'rapport',component:RapportComponent},
  {path:'pdfprogramme',component:PdfProgrammeComponent},
  {path:'deletedmodal',component:DeleteModalMsgComponent},
  {path:'compteRendu',component:CompteRenduComponent},
  {path:'precedent',component:PrecedentComponent},

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
