import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/internal/operators/catchError';
import { throwError } from 'rxjs/internal/observable/throwError';
import { map } from 'rxjs/internal/operators/map';

@Injectable({ providedIn: 'root' })
export class UploadService {
    private apiUrl = environment.apiUrl + '/media/public';

    constructor(private http: HttpClient) { }

    getSignedUrl(file: File, type: string) {
        return this.http.post<any>(`${this.apiUrl}`, {
            type: type,
            filename: `${type}-${file.name}`,
            mime: file.type
        }).pipe(
            catchError((error: HttpErrorResponse) => {
                return throwError(error);
            }))
    }

    uploadToS3(payload: any, file: any) {
        var formData = new FormData();
        formData.append('Content-Type', payload.signedData.fields.contentType)
        formData.append('acl', payload.signedData.fields.acl)
        formData.append('key', payload.signedData.fields.key)
        formData.append('policy', payload.signedData.fields.policy)
        formData.append('x-amz-algorithm', payload.signedData.fields.xAmzAlgorithm)
        formData.append('x-amz-credential', payload.signedData.fields.xAmzCredential)
        formData.append('x-amz-date', payload.signedData.fields.xAmzDate)
        formData.append('x-amz-signature', payload.signedData.fields.xAmzSignature)
        formData.append('file', file)

        return this.http.post<any>(payload.signedData.url, formData).pipe(
            catchError((error: HttpErrorResponse) => {
                return throwError(error);
            })
        )

    }
}
