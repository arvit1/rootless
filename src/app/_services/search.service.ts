import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {environment} from '../../environments/environment';
import {Search} from "../_models";

@Injectable({ providedIn: 'root' })
export class SearchService {
  private searchUrl = environment.apiUrl + 'api/search/';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Search> {
    return this.http.get<Search>(this.searchUrl);
  }
}
