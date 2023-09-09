import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router  } from '@angular/router';
import { response } from 'express';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';




@Component({
  selector: 'signup',
  templateUrl:'./signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  signupForm: FormGroup;
  emailExists: boolean = false;
  userId: number | undefined;


  constructor(private fb: FormBuilder, private http: HttpClient, private router:Router) {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      type: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {

  }
  onSubmit() {
    if (this.signupForm.valid) {
      const formData = this.signupForm.value;
      this.getUserEmail().subscribe(
        (email) => {
          this.emailExists = !!email;
          if (this.emailExists) {
            console.log('Email already exists. Please use a different email.',this.emailExists);
          } else {
            // Proceed with user creation if email doesn't exist
            this.http.post('http://localhost:3000/auth/signup', formData).subscribe(
              (response) => {
                if (formData.type === 'csr'){
                console.log('User created:', response);
                localStorage.setItem('userType', formData.type);
                this.router.navigate(['/planaction'],{queryParams:{userType:formData.type}});
              }
              },
              (error) => {
                // Handle error here, e.g., display error message to user
                console.error('Error creating user:', error);

              }
            );
          }
        },
        (error) => {
          console.error('Error checking email:', error);
        }
      );
     /*
      this.http.post('http://localhost:3000/auth/signup', formData).subscribe(
        (response) => {
          // Handle successful response here, e.g., redirect to home page
          console.log('User created:', response);
        },
        (error) => {
          // Handle error here, e.g., display error message to user
          console.error('Error creating user:', error);
        }
      );
      */
    }
  }
  redirectToLogin() {
    this.router.navigate(['/signup/login']);
  }

  /*
    getUserEmail(){
   if(this.userId){
     this.http.get<any>('/users/${this.userId/email}').subscribe(
      (response)=>{
        const email=response.email;
        console.log('user email:',email)
      },
      (error) => {
        console.error('Error getting user email:', error);
      },
    );
   }else {
      console.log('User email not available');
    }
  }
   */
getUserEmail(): Observable<string | null>{
  if (this.userId) {
    return this.http.get<any>(`/users/${this.userId}/email`).pipe(
      map((response) => {
        return response.email as string; 
      }),
      catchError((error) => {
        console.error('Error getting user email:', error);
        return of(null); // Return null in case of an error or if email doesn't exist
      })
    );
  } else {
    console.log('User ID not available');
    return of(null); // Return null if the user ID is not available
  }
}
}

