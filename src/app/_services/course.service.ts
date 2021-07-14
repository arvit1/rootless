import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AllCourses, Course } from "../_models";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class CourseService {
  private coursesUrl = environment.apiUrl + '/courses';

  constructor(private http: HttpClient) {
  }

  getExperts(): Observable<any> {
    return this.http.get<any>(`${environment.publicUrl}/experts`);
  }

  getAll(page: number, size: number, search?: string, topic?: string): Observable<AllCourses> {
    let path = `page=${page}&size=${size}`;
    if (search) {
      path += `&search=${search}`
    }
    if (topic) {
      path += `&topic=${topic}`
    }
    return this.http.get<AllCourses>(`${this.coursesUrl}?${path}`);
  }

  getEnrolledCourses() {
    return this.http.get<AllCourses>(`${this.coursesUrl}?enrolled=true`);
  }

  getTopics(): Observable<any> {
    return this.http.get<any>(`${environment.publicUrl}/courses/topics`);
  }

  getById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.coursesUrl}/${id}`);
  }

  getCourseVideo(id: number): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.coursesUrl}/${id}/videos`);
  }

  create(course: Course): Observable<Course> {
    return this.http.post<Course>(`${this.coursesUrl}/apply`, course).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    )
  }

  edit(course: Course): Observable<Course> {
    return this.http.put<Course>(this.coursesUrl + course.id, course);
  }

  delete(id: number): Observable<Course> {
    return this.http.delete<Course>(this.coursesUrl + id);
  }

  enroll(id: number): Observable<Course> {
    return this.http.post<Course>(`${this.coursesUrl}/${id}/enrollment`, {}).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    )
  }

  setWatched(courseId: number, videoId: number): Observable<Course> {
    return this.http.post<Course>(`${this.coursesUrl}/${courseId}/videos/${videoId}/watch`, {}).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    )
  }

  getCourseCompletion(id: number): Observable<any> {
    return this.http.get<any>(`${this.coursesUrl}/${id}/completion`);
  }

  getVideoUrl(filename: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/media/${filename}`);
  }

  upgradeSubscription(): Observable<string> {
    return this.http.patch<string>(`${environment.apiUrl}/subscription/upgrade`, {}).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    )
  }
}
