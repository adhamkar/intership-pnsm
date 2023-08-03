import { Component,OnInit, ElementRef, HostListener, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl,ValidationErrors,ValidatorFn, AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';
import { response } from 'express';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css']
})
export class PasswordChangeComponent implements OnInit{
  passwordForm :FormGroup
constructor(private fb: FormBuilder, private http: HttpClient, private router:Router,private route:ActivatedRoute){
this.passwordForm=this.fb.group({
  email: ['', Validators.required],
  currentPassword: ['', Validators.required],
  newPassword: ['', [Validators.required, Validators.minLength(6)]],
  confirmPassword: ['', Validators.required],

});

}

  ngOnInit(): void {
  }
  modierMdp(){
if(this.passwordForm.valid){
  const formData=this.passwordForm.value
    const patchData={email: formData.email,password:formData.password, newPassword:formData.newPassword};
    this.http.patch('http://localhost:3000/auth/pssw',patchData).subscribe(
      (response: any) => {
        console.log('password modified!', response);
        const accessToken = response.accessToken;
        localStorage.setItem('access_token', accessToken);
        this.router.navigate(['/home']);
      },
      (error) => {
        console.error('changing failed!', error);
      }
    )
}
  }
}
