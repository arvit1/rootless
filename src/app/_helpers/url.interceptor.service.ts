import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../_services';

@Injectable()
export class UrlInterceptor implements HttpInterceptor {

  constructor(public authenticationService: AuthenticationService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    const currentUser = this.authenticationService.currentUserValue;

    if (req.url.includes('login') || req.url.includes('register' || req.url.includes('media'))) {
      return next.handle(req)
    }

    if (!(currentUser && currentUser.tokens.accessToken) && !(req.url.includes('media'))) {
      const newUrl = req.url.replace('user_api', 'public_api')
      const dupReq = req.clone({ url: newUrl });
      return next.handle(dupReq);
    }

    return next.handle(req)
  }
}
