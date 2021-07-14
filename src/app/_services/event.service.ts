import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Event} from "../_models";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {environment} from '../../environments/environment';

@Injectable({providedIn: 'root'})
export class EventService {
  private eventsUrl = environment.apiUrl + '/events/';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Event[]> {
    return this.http.get<Event[]>(this.eventsUrl);
  }

  getById(id: number): Observable<Event>{
    return this.http.get<Event>(this.eventsUrl + id);
  }

  create(event: Event) :Observable<Event> {
    // @ts-ignore
    event.id = null;

    return this.http.post<Event>(this.eventsUrl, event).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    )
  }

  edit(event: Event): Observable<Event> {
    return this.http.put<Event>(this.eventsUrl + event.id, event);
  }

  delete(id: number): Observable<Event> {
    return this.http.delete<Event>(this.eventsUrl + id);
  }
}
