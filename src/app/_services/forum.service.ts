import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Forum} from "../_models";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import { environment } from '../../environments/environment';

@Injectable({providedIn: 'root'})
export class ForumService {
  private forumsUrl = environment.apiUrl + 'api/forums/';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Forum[]> {
    return this.http.get<Forum[]>(this.forumsUrl);
  }

  getById(id: number): Observable<Forum>{
    return this.http.get<Forum>(this.forumsUrl + id);
  }

  create(forum: Forum) :Observable<Forum> {
    // @ts-ignore
    forum.id = null;

    return this.http.post<Forum>(this.forumsUrl, forum).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    )
  }

  edit(forum: Forum): Observable<Forum> {
    return this.http.put<Forum>(this.forumsUrl + forum.id, forum);
  }

  delete(id: number): Observable<Forum> {
    return this.http.delete<Forum>(this.forumsUrl + id);
  }
}
