import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService3, AuthResponseData } from './student-auth.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {

  isLoginMode = true;
  isLoading = false;
  error: string = null;

  
  constructor(private authService: AuthService3, private router: Router) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }


  
onSubmit(form:NgForm){

  if (!form.valid) {
    return;
  }

  
  const email = form.value.student_email;
  const password = form.value.student_password;
  const studentName = form.value.student_name;
  const studentDOB = form.value.student_dob;
  const studentGender = form.value.student_gender;
  const studentDistrict = form.value.student_district;
  const studentMobileNo = form.value.student_contact_number;
  const studentEmail = form.value.student_email;
  const studentaadhar = form.value.student_aadhar_number;
  const studentState = form.value.student_state;
  
  console.log(typeof studentDOB);


  let authObs: Observable<AuthResponseData>;

    this.isLoading = true;

    if (this.isLoginMode) {
      console.log(email);
      console.log(email);
      authObs = this.authService.login(email, password);
    } else {
      authObs = this.authService.signup(email, password, studentName, studentDOB, studentGender, studentDistrict, studentMobileNo, studentEmail, studentaadhar, studentState);
    }

    authObs.subscribe(
      resData => {
        alert(JSON.stringify(resData));
        localStorage.setItem('applicationDetails', JSON.stringify(resData));
        this.isLoading = false;
        this.router.navigate(['/studentdashboard']);
      },
      errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.isLoading = false;
      }
    );

    form.reset();
  }
}