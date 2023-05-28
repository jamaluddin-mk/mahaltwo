import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  //baseUri: string = 'https://dc.mahalone.org/api';
  baseUri = environment.baseUri;

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  // Create
  createMember(data): Observable<any> {
    let url = `${this.baseUri}/create`;
    console.log(url);
    console.log(data);
    return this.http.post(url, data).pipe(catchError(this.errorMgmt)
    );
  }

  // Create Family
  createFamily(data): Observable<any> {
    let url = `${this.baseUri}/create`;
    console.log(url);
    console.log(data);
    return this.http.post(url, data).pipe(catchError(this.errorMgmt)
    );
  }

  // Create Family
  createIncome(data): Observable<any> {
    let url = `${this.baseUri}/create-income`;
    console.log(url);
    console.log(data);
    return this.http.post(url, data).pipe(catchError(this.errorMgmt)
    );
  }

  // Login
  login(data): Observable<any> {
    let url = `${this.baseUri}/login`;
    return this.http.post(url, data).pipe(catchError(this.errorMgmt)
    );
  }

  // logout
  logout() {
    console.log("inside apiservice logout")
    return this.http.delete(`${this.baseUri}/logout`)
      .subscribe(() => console.log('Delete successful'));
  }

  // Get all members
  getMembers() {
    return this.http.get(`${this.baseUri}/members`);
  }

  // Get all incomes
  getIncomes() {
    return this.http.get(`${this.baseUri}/incomes`);
  }

  // Get all voters
  getVoters() {
    return this.http.get(`${this.baseUri}/voters`);
  }

  // Get all family members
  getFamilys() {
    return this.http.get(`${this.baseUri}/members`);
  }


  // Get member
  getMember(id): Observable<any> {
    let url = `${this.baseUri}/read/${id}`;
    return this.http.get(url, { headers: this.headers }).pipe(
      // map((res: Response) => {
      //   return res || {};
      // }),
      catchError(this.errorMgmt)
    );
  }

  // Get member
  getCounter(): Observable<any> {
    let tempstr = "autoval";
    let url = `${this.baseUri}/getcounter/${tempstr}`;
    return this.http.get(url, { headers: this.headers }).pipe(
      // map((res: Response) => {
      //   return res || {};
      // }),
      catchError(this.errorMgmt)
    );
  }

  // Get member ID
  setCounter(): Observable<any> {
    let url = `${this.baseUri}/setcounter`;
    return this.http.get(url, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    );
  }
  // Get family
  getFamily(id): Observable<any> {
    let url = `${this.baseUri}/read/${id}`;
    return this.http.get(url, { headers: this.headers }).pipe(
      // map((res: Response) => {
      //   return res || {};
      // }),
      catchError(this.errorMgmt)
    );
  }
  // Update member
  updateMember(id, data): Observable<any> {
    let url = `${this.baseUri}/update/${id}`;
    return this.http
      .put(url, data, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }


  // Update family member
  updateFamily(id, data): Observable<any> {
    let url = `${this.baseUri}/update/${id}`;
    return this.http
      .put(url, data, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }

  // Delete member
  deleteMember(id): Observable<any> {
    let url = `${this.baseUri}/delete/${id}`;
    return this.http
      .delete(url, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }


  // Delete family member
  deleteFamily(id): Observable<any> {
    let url = `${this.baseUri}/delete/${id}`;
    return this.http
      .delete(url, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }

  // Error handling
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    // console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
