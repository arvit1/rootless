import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Story} from "../_models";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import { environment } from '../../environments/environment';

@Injectable({providedIn: 'root'})
export class StoryService {
  private storysUrl = environment.apiUrl + 'api/stories/';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Story[]> {
    return this.http.get<Story[]>(this.storysUrl);
  }

  getById(id: number): Observable<Story>{
    return this.http.get<Story>(this.storysUrl + id);
  }

  create(story: Story) :Observable<Story> {
    // @ts-ignore
    story.id = null;

    return this.http.post<Story>(this.storysUrl, story).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    )
  }

  edit(story: Story): Observable<Story> {
    return this.http.put<Story>(this.storysUrl + story.id, story);
  }

  delete(id: number): Observable<Story> {
    return this.http.delete<Story>(this.storysUrl + id);
  }
}
