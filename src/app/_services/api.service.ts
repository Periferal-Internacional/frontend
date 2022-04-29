import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = "https://perinte.herokuapp.com/";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };
  constructor(private http: HttpClient) { }
  
  getPipe(path:string) {
    return this.http.get(this.baseUrl + path, this.httpOptions);
  }

  putPipe(path:string, request:JSON) {
    return this.http.put<JSON>(this.baseUrl + path, request, this.httpOptions);
  }
  
  postPipe(path:string, request:JSON) {
    return this.http.post<JSON>(this.baseUrl + path, request, this.httpOptions);
  }

  deletePipe(path:string) {
    return this.http.delete(this.baseUrl + path, this.httpOptions);
  }

  loginPipe(request:JSON) {
    return this.http.post<JSON>(this.baseUrl + "auth/login", request);
  }
}
