import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpParams
} from '@angular/common/http';
import { take, exhaustMap } from 'rxjs/operators';

import { AuthService2 } from './institute-auth.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService2) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.authService.user1.pipe(
      take(1),
      exhaustMap(user1 => {
        if (!user1) {
          return next.handle(req);
        }
        const modifiedReq = req.clone({
          params: new HttpParams().set('auth-institute', user1.token)
        });
        return next.handle(modifiedReq);
      })
    );
  }
}
