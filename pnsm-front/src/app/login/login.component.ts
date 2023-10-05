import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';
import * as bcrypt from 'bcryptjs';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
 iscorrect:boolean=false;
  islogin:boolean=true;
  loginForm: FormGroup;
  userType: string | null = null;
  constructor(private fb: FormBuilder, private http: HttpClient, private router:Router,private route:ActivatedRoute) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],

    });

  }
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.userType = params['userType'] || null;
      
    });


  }

  onLogin() {

    if(this.loginForm.valid){
    const formData=this.loginForm.value
    const loginData={email: formData.email,password:formData.password};
    this.http.post('http://localhost:3000/auth/login',loginData).subscribe(
       (response: any) => {

          console.log('Login successful!', response);
          this.islogin=true;
          const accessToken = response.accessToken;
          localStorage.setItem('access_token', accessToken);
          this.router.navigate(['/planaction']);

      },
      (error) => {
        this.islogin=false;
        console.error('Login failed!', error);

      }
    );

  }
}
redirectToLogin() {
  this.router.navigate(['/signup']);
}

}

