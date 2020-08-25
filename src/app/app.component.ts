import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { AuthService1 } from './officer-login-component/auth-nodal.service';
import { AuthService2 } from './institute-login-component/institute-auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 

  constructor(private authService: AuthService,private authService1: AuthService1, private authService2: AuthService2) {}

  ngOnInit() {
    this.authService.autoLogin();
    this.authService1.autoLogin();
    this.authService2.autoLogin();

  }
}
