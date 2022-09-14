import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private urlBase: string = environment.api;
  
  constructor(private http: HttpClient) { }  

  get<T>(route: string, params?: HttpParams): Observable<T> {
    return this.http.get<T>(`${this.urlBase}${route}`, {params});
  }

  post<T>(route: string, data: T): Observable<T> {
    return this.http.post<T>(`${this.urlBase}${route}`, data);
  }

  put<T>(route: string, data: T): Observable<T> {
    return this.http.put<T>(`${this.urlBase}${route}`, data);
  }

  delete<T>(route: string, params?: HttpParams): Observable<T> {
    return this.http.get<T>(`${this.urlBase}${route}`, {params});
  }
}
