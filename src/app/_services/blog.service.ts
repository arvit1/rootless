import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AllBlogs, Blog } from "../_models";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class BlogService {
  private blogsUrl = environment.apiUrl + '/blog/posts';
  private publicUrl = environment.publicUrl + '/blog/posts';
  constructor(private http: HttpClient) {
  }

  getAll(page: number, size: number, search?: string, industryId?: string): Observable<AllBlogs> {
    let path = `page=${page}&size=${size}`;
    if (search) {
      path += `&search=${search}`
    }
    if (industryId) {
      path += `&industry_id=${industryId}`
    }
    return this.http.get<AllBlogs>(`${this.publicUrl}?${path}`);
  }

  getExperts(): Observable<any> {
    return this.http.get<any>(`${environment.publicUrl}/experts`);
  }

  getById(id: number): Observable<Blog> {
    return this.http.get<Blog>(`${this.publicUrl}/${id}`);
  }

  getIndustries(): Observable<any> {
    return this.http.get<any>(`${environment.publicUrl}/industries`);
  }

  create(blog: Blog): Observable<Blog> {
    return this.http.post<Blog>(this.blogsUrl, blog).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    )
  }

  edit(blog: Blog): Observable<Blog> {
    return this.http.put<Blog>(this.blogsUrl + blog.id, blog);
  }

  delete(id: number): Observable<Blog> {
    return this.http.delete<Blog>(this.blogsUrl + id);
  }
}
