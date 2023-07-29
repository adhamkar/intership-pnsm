import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient, private router:Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  ngOnInit(): void {
  }

  onLogin() {
    if(this.loginForm.valid){
      const formData=this.loginForm.value
    const loginData={email: formData.email,password:formData.password};
    this.http.post('http://localhost:3000/auth/login',loginData).subscribe(
      (response: any) => {
        // Handle successful login here
        console.log('Login successful!', response);

        // Assuming the server returns an access token upon successful login
        const accessToken = response.accessToken;
        // Example of saving the access token in local storage:
        localStorage.setItem('access_token', accessToken);

        // Redirect to the desired page after successful login
        this.router.navigate(['/home']);
      },
      (error) => {
        console.error('Login failed!', error);
      }
    );

  }
}
redirectToLogin() {
  this.router.navigate(['/signup']);
}
}
