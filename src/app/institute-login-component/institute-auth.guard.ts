import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router,
    UrlTree
  } from '@angular/router';
  import { Injectable } from '@angular/core';
  import { Observable } from 'rxjs';
  import { map, tap, take } from 'rxjs/operators';
  
  import { AuthService2 } from './institute-auth.service';
  
  @Injectable({ providedIn: 'root' })
  export class AuthGuard2 implements CanActivate {
    constructor(private authService: AuthService2, private router: Router) {}
  
    canActivate(
      route: ActivatedRouteSnapshot,
      router: RouterStateSnapshot
    ):
      | boolean
      | UrlTree
      | Promise<boolean | UrlTree>
      | Observable<boolean | UrlTree> {
      return this.authService.user1.pipe(
        take(1),
        map(user1 => {
          const isAuth = !!user1;
          if (isAuth) {
            return true;
          }
          return this.router.createUrlTree(['/auth-institute']);
        })
        // tap(isAuth => {
        //   if (!isAuth) {
        //     this.router.navigate(['/auth']);
        //   }
        // })
      );
    }
  }
  