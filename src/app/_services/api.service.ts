import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = "https://perinte.herokuapp.com/"
  constructor(private http: HttpClient) { }
  
  getPipe(path:string) {
    return this.http.get(this.baseUrl + path);
  }

  postPipe(path:string, request:JSON) {
    return this.http.post<JSON>(this.baseUrl + path, request);
  }
}
