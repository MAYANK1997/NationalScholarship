import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { throwError, BehaviorSubject } from 'rxjs';

import { User } from './user.model';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  Registered ?:boolean
	 	role:string
	  roleId:number
    password:string
	  studentId:number
	  instituteApprovalStatus:boolean
	  nadalApprovalStatus:boolean
	  ministryApprovalStatus:boolean
	  studentName:string
    studentDOB:Date
      studentGender:string
	  studentDistrict:string
	  studentMobileNo:any
	  studentEmail:string
	  studentaadhar:string
	  studentState:string
	  instituteCode:string
  
}

@Injectable({ providedIn: 'root' })
export class AuthService3 {
  user1 = new BehaviorSubject<User>(null);
  private tokenExpirationTimer: any;

  constructor(private http: HttpClient, private router: Router) {}

  signup(email:string, password:string, studentName:string, studentDOB:Date, studentGender:string, studentDistrict:string, studentMobileNo:string, studentEmail:string, studentaadhar:string, studentState:string) {
    return this.http
      .post<AuthResponseData>(
        'http://localhost:8585/studentRegister',
        {
          email: email,
          password: password,
          role:"Student",
          roleId:4,

          studentName:studentName, 
          studentDOB:studentDOB, 
          studentGender:studentGender, 
          studentDistrict:studentDistrict, 
          studentMobileNo:studentMobileNo, 
          studentEmail:studentEmail, 
          studentaadhar:studentaadhar, 
          studentState:studentState,
          instituteCode:10102

        }
      )
      .pipe(
        catchError(this.handleError),
        tap(resData => {
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
            
          );
        })
      );
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'http://localhost:8585/studentLogin',
        {
          email: email,
          password: password
          
        }
      )
      .pipe(
        catchError(this.handleError),
        tap(resData => {
          this.handleAuthentication(
            
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
          console.log(resData.email);
        })
      );
  }

  autoLogin() {
    const userData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
      return;
    }

    const loadedUser = new User(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExpirationDate)
      
    );

    if (loadedUser.token) {
      this.user1.next(loadedUser);
      const expirationDuration =
        new Date(userData._tokenExpirationDate).getTime() -
        new Date().getTime();
      this.autoLogout(expirationDuration);
    }
  }

  logout() {
    this.user1.next(null);
    this.router.navigate(['/auth-student']);
    localStorage.removeItem('userData');
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  autoLogout(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }

  private handleAuthentication(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user1 = new User(email, userId, token, expirationDate);
    this.user1.next(user1);
    this.autoLogout(expiresIn * 1000);
    localStorage.setItem('userData', JSON.stringify(user1));
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email exists already';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exist.';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'This password is not correct.';
        break;
    }
    return throwError(errorMessage);
  }
}
