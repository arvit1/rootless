import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AllBlogs, AllCourses, User } from './../_models';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }
    private blogsUrl = environment.apiUrl + '/blog/posts';

    getExpertById(id: number) {
        return this.http.get<User>(`${environment.publicUrl}/experts/${id}`);
    }

    getMyProfile() {
        return this.http.get<User>(`${environment.apiUrl}/profile/me`);
    }

    getBlogs(expertId: number) {
        return this.http.get<AllBlogs>(`${environment.publicUrl}/blog/posts?expert_id=${expertId}`);
    }

    getCourses(expertId: number) {
        return this.http.get<AllCourses>(`${environment.publicUrl}/courses?expert_id=${expertId}`);
    }

    getHires(expertId: number) {
        return this.http.get<any>(`${environment.apiUrl}/hires/${expertId}`);
    }

    updateProfile(payload: any) {
        return this.http.patch<any>(`${environment.apiUrl}/profile`, payload)
    }

}
