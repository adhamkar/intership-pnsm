import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule  } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HomeComponent } from './home/home.component';
import { MatSelectModule } from '@angular/material/select';
import { PlanActionComponent } from './plan-action/plan-action.component';
import { PopulationCouvrirComponent } from './population-couvrir/population-couvrir.component';
import { ProgrammeRemplireComponent } from './programme-remplire/programme-remplire.component';
import { RessourcesComponent } from './ressources/ressources.component';
import { RessourcesHumaineComponent } from './ressources-humaine/ressources-humaine.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AboutUsComponent } from './about-us/about-us.component';
import { ModifierETtelechargerComponent } from './modifier-ettelecharger/modifier-ettelecharger.component';
import { PasswordChangeComponent } from './password-change/password-change.component';

import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { MatTableModule } from '@angular/material/table';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from "@angular/flex-layout";


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    PlanActionComponent,
    PopulationCouvrirComponent,
    ProgrammeRemplireComponent,
    RessourcesComponent,
    RessourcesHumaineComponent,
    AboutUsComponent,
    ModifierETtelechargerComponent,
    PasswordChangeComponent,
    ContactUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    FormsModule,
    MatCheckboxModule,
    MatCardModule,
    MatButtonModule,
    ToastrModule.forRoot(),
    CommonModule,
    MatTableModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
