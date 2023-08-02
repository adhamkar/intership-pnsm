import { Component,OnInit, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { response } from 'express';

@Injectable({
providedIn:'root',
})

export class PopulationDataService {
  url='http://localhost:3000/populations';
  constructor(private http: HttpClient){
  }
  populations(){
    return this.http.get(this.url)
  }
  savePopulation(data:any){
return this.http.post(this.url,data)
  }
}
