import {HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable, Injector} from "@angular/core";
import {Observable, Subject, throwError} from "rxjs";
import {catchError, switchMap, tap} from "rxjs/operators";
import {AuthenticationService} from "../_services";
import {environment} from "../../environments/environment";
import {ToastrService} from "ngx-toastr";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  refreshTokenInProgress = false;
  tokenRefreshedSource = new Subject();
  tokenRefreshed$ = this.tokenRefreshedSource.asObservable();

  constructor(private injector: Injector, private authService: AuthenticationService,
              private toastr: ToastrService) {
  }

  addAuthHeader(request: HttpRequest<any>) {
    const currentUser = this.authService.currentUserValue;
    if (currentUser && currentUser.tokens) {
      return request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.tokens.accessToken}`
        },
        withCredentials: true
      });
    }
    return request;
  }

  refreshToken(): Observable<any> {
    if (this.refreshTokenInProgress) {
      return new Observable(observer => {
        this.tokenRefreshed$.subscribe(() => {
          observer.next();
          observer.complete();
        });
      });
    } else {
      this.refreshTokenInProgress = true;

      // @ts-ignore
      return this.authService.refreshToken().pipe(
        tap(() => {
          this.refreshTokenInProgress = false;
          this.tokenRefreshedSource.next();
        }),
        // @ts-ignore
        catchError(() => {
          this.refreshTokenInProgress = false;
          this.authService.logout();
        }));
    }
  }

  handleResponseError(error: HttpErrorResponse, request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    // Business error
    if (error.status === 400) {
      this.toastr.error(error.message, 'Error in api ' + request.url);
    }

    // Invalid token error
    else if (error.status === 417) {
      return this.refreshToken().pipe(
        switchMap(() => {
          request = this.addAuthHeader(request);
          return next.handle(request);
        }),
        catchError((e: HttpErrorResponse) => {
          if (e.status !== 401) {
            return this.handleResponseError(e, request, next);
          } else {
            this.authService.logout();
            return throwError(e)
          }
        }));
    }

    // Access denied error
    else if (error.status === 403) {
      // Show message
      // Logout
      this.authService.logout();
    }

    // Server error
    else if (error.status === 500) {
      this.toastr.error(error.message, 'Error in api ' + request.url);
    }

    // Maintenance error
    else if (error.status === 503) {
      // Show message
      // Redirect to the maintenance page
    }

    return throwError(error);
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    const currentUser = this.authService.currentUserValue;

    if (request.url.includes('login') || request.url.includes('register') || request.url.includes('amazonaws')) {
      return next.handle(request)
    }

    if (request.url.startsWith(environment.apiUrl) || request.url.startsWith(environment.adminUrl)) {
      if (currentUser && currentUser.tokens.accessToken) {
        request = this.addAuthHeader(request);
      }
      // Handle response
      return next.handle(request).pipe(catchError((error: HttpErrorResponse) => {
        return this.handleResponseError(error, request, next);
      }));
    }
    return next.handle(request)
  }
}
