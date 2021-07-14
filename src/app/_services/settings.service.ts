import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Login, User } from '../_models';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class SettingsService {

  constructor(private http: HttpClient, private router: Router) {

  }

  updatePassword(payload: any) {
    return this.http.patch<any>(`${environment.apiUrl}/profile/password`, payload)
  }

  getInvoices() {
    return this.http.get<any>(`${environment.apiUrl}/subscription/invoices`)
  }

  updateEmail(email: string) {
    return this.http.patch<any>(`${environment.apiUrl}/profile`, { email: email })
  }

  getHires() {
    return this.http.get<any>(`${environment.apiUrl}/hires`)
  }

}
