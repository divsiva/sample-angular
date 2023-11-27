import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseURL: string = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {}
  getUsers(): Observable<any> {
    return this.http.get(this.baseURL);
  }
  getUserDetails(id: any): Observable<any> {
    return this.http.get(this.baseURL + '/' + id);
  }
  deleteUser(id: any) {
    return this.http.delete(this.baseURL + '/' + id);
  }
}
