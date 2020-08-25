import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { AuthService1 } from '../officer-login-component/auth-nodal.service';
import { AuthService2 } from '../institute-login-component/institute-auth.service';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit, OnDestroy {


  isAuthenticated = false;
  private userSub: Subscription;
  
  constructor(private authService: AuthService, private authService1: AuthService1, private authService2: AuthService2) { }
  

  ngOnInit(): void {

    this.userSub = this.authService1.user.subscribe(user => {
      this.isAuthenticated = !!user;
      console.log(!user);
      console.log(!!user);
      
    });
    this.userSub = this.authService.user1.subscribe(user1 => {
      if(user1.email==="mayankpabb@gmail.com"){
        this.isAuthenticated = !!user1;
        console.log(user1.email);
        console.log(!!user1);
      }
      
    });

    this.userSub = this.authService2.user1.subscribe(user1 => {
      if(user1.email==="a@gmail.com"){
        this.isAuthenticated = !!user1;
        console.log(user1.email);
        console.log(!!user1);
      }
      
    });

    
  }

  onLogout() {
    this.authService.logout();
    this.authService1.logout();
  }
  ngOnDestroy() {
    this.userSub.unsubscribe();
    
  }
}
