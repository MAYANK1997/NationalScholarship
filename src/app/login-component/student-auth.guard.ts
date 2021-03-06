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

import { AuthService3 } from './student-auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard3 implements CanActivate {
  constructor(private authService: AuthService3, private router: Router) {}

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
        return this.router.createUrlTree(['/auth-student']);
      })
      // tap(isAuth => {
      //   if (!isAuth) {
      //     this.router.navigate(['/auth']);
      //   }
      // })
    );
  }
}
