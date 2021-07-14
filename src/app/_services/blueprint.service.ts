import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Blueprint, GetAllBlueprints, ApplyBlueprint } from "../_models";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class BlueprintService {
  private blueprintsUrl = environment.apiUrl + '/blueprints';

  constructor(private http: HttpClient) {
  }

  getAll(page: number, size: number, search?: string, industryId?: string): Observable<GetAllBlueprints> {
    let path = `page=${page}&size=${size}`;
    if (search) {
      path += `&search=${search}`
    }
    if (industryId) {
      path += `&industry_id=${industryId}`
    }
    return this.http.get<GetAllBlueprints>(`${environment.apiUrl}/blueprints?${path}`);
  }

  getTailored(): Observable<GetAllBlueprints> {
    return this.http.get<GetAllBlueprints>(`${environment.apiUrl}/blueprints?tailored=true`);
  }

  getSearch(search: string): Observable<GetAllBlueprints> {
    return this.http.get<GetAllBlueprints>(`${environment.apiUrl}/blueprints?search=${search}`);
  }

  getIndustries(): Observable<any> {
    return this.http.get<any>(`${environment.publicUrl}/industries`);
  }

  getById(id: number): Observable<Blueprint> {
    return this.http.get<Blueprint>(`${this.blueprintsUrl}/${id}`);
  }

  create(blueprint: ApplyBlueprint): Observable<ApplyBlueprint> {
    return this.http.post<ApplyBlueprint>(`${environment.apiUrl}/blueprints/apply`, blueprint).pipe(
      map(blueprint => {
        return blueprint;
      }),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    )
  }

  edit(blueprint: Blueprint): Observable<Blueprint> {
    return this.http.put<Blueprint>(this.blueprintsUrl + blueprint.id, blueprint);
  }

  delete(id: number): Observable<Blueprint> {
    return this.http.delete<Blueprint>(this.blueprintsUrl + id);
  }

  getMediaUrl(filename: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/media/${filename}`);
  }

}
