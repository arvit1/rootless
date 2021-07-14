import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class SubscriptionService {
    constructor(private http: HttpClient) {
    }

    changePaymentMethod(pmId: string): Observable<string> {
        return this.http.patch<string>(`${environment.apiUrl}/subscription/payment_method`, { paymentMethodId: pmId }).pipe(
            catchError((error: HttpErrorResponse) => {
                return throwError(error);
            })
        )
    }

    cancelSubscription(): Observable<string> {
        return this.http.patch<string>(`${environment.apiUrl}/subscription/cancel`, {}).pipe(
            catchError((error: HttpErrorResponse) => {
                return throwError(error);
            })
        )
    }
}
