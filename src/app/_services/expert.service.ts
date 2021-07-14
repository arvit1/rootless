import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Expert, AllExperts } from "../_models";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ExpertService {
  private expertsUrl = environment.publicUrl + '/experts';

  constructor(private http: HttpClient) {
  }

  getAll(page: number, size: number, search?: string, industryId?: string): Observable<AllExperts> {
    let path = `page=${page}&size=${size}`;
    if (search) {
      path += `&search=${search}`
    }
    if (industryId) {
      path += `&industry_id=${industryId}`
    }
    return this.http.get<AllExperts>(`${this.expertsUrl}?${path}`);
  }

  getIndustries(): Observable<any> {
    return this.http.get<any>(`${environment.publicUrl}/industries`);
  }

  hireExpert(payload: any) {
    return this.http.post<any>(`${environment.apiUrl}/hires`, payload);
  }

}
