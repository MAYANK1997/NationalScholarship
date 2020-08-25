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

  
  const email = form.value.institute_email;
  const password = form.value.institute_password;
  const instituteCategory = form.value.institute_category;
  const instituteName = form.value.institute_name;
  const instituteDISECode = form.value.institute_dise_code;
  const instituteType = form.value.institute_type;
  const affiliatedUniversityName = form.value.institute_affiliated_university_name;
  const affiliatedUniversityState = form.value.institute_affiliated_university_state;
  const yearStarted = form.value.institute_year_started;
  const instituteLoc = form.value.institute_address1;
  const address = form.value.institute_address2;
  const instituteCity = form.value.institute_city;
  const instituteState = form.value.institute_state;
  const institutePincode = form.value.institute_pincode;
  const district = form.value.institute_district;
  const principalName = form.value.institute_principal_name;
  const mobileNumber = form.value.institute_contact_number;
  const instituteEmail = form.value.institute_email;
 


  let authObs: Observable<AuthResponseData>;

    this.isLoading = true;

    if (this.isLoginMode) {
      console.log(email);
      console.log(email);
      authObs = this.authService.login(email, password);
    } else {
      authObs = this.authService.signup(email, password, instituteCategory, instituteName, instituteDISECode, instituteType, affiliatedUniversityName, affiliatedUniversityState, yearStarted, instituteLoc, address, instituteCity, instituteState, institutePincode, district, principalName,mobileNumber,instituteEmail);
    }

    authObs.subscribe(
      resData => {
        console.log(resData);
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