import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Login, User } from '../_models';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<Login>;
  public currentUser: Observable<Login>;
  private readonly USER = 'USER';

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<Login>(JSON.parse(localStorage.getItem(this.USER) as string));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): Login {
    return this.currentUserSubject.value;
  }

  public isLoggedIn(): boolean {
    return !!this.currentUserSubject.value;
  }

  login(email: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl}/auth/login`, { email, password })
      .pipe(tap((login: Login) => {
        // login successful if there's a jwt token in the response
        if (login && login.tokens.accessToken) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem(this.USER, JSON.stringify(login));
          this.currentUserSubject.next(login);
        }
      }));
  }

  refreshToken() {
    if (this.currentUserValue.tokens.refreshToken) {
      return this.http.post<any>(`${environment.apiUrl}/auth/login_refresh`, {
        refreshToken: this.currentUserValue.tokens.refreshToken
      }).pipe(tap((login: Login) => {
        localStorage.setItem(this.USER, JSON.stringify(login));
        this.currentUserSubject.next(login)
      }));
    }
  }

  register(payload: User) {
    console.log(payload)
    return this.http.post<any>(`${environment.apiUrl}/auth/register`, payload)
      .pipe(tap((login: Login) => {
        // login successful if there's a jwt token in the response
        if (login && login.tokens) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem(this.USER, JSON.stringify(login));
          this.currentUserSubject.next(login);
        }
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.clear()

    // @ts-ignore
    this.currentUserSubject.next(null);
    this.router.navigate(['/login'])
  }

  getRole() {
    if (this.currentUserValue.user.userLevel === 'TIER_1' && this.currentUserValue.user.userType === 'MEMBER') {
      return 'COURIOUS'
    }
    if (this.currentUserValue.user.userLevel === 'TIER_2' && this.currentUserValue.user.userType === 'MEMBER') {
      return 'ROOTLESS'
    }
    if (this.currentUserValue.user.userLevel === 'TIER_1' && this.currentUserValue.user.userType === 'EXPERT') {
      return 'EXPERT'
    }
  }

  upgradeRole() {
    this.currentUserValue.user.userLevel = 'TIER_2';
    this.currentUserValue.user.userType = 'MEMBER';
    this.currentUserSubject.next(this.currentUserValue);
  }
}
