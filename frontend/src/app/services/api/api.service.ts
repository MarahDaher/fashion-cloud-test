import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl: string = environment.apiEndpoint;

  constructor(private http: HttpClient) {}

  get<T>(
    endpoint: string,
    options?: {
      headers?: HttpHeaders;
      params?: HttpParams;
      responseType?: 'json';
    }
  ): Observable<T> {
    const url = `${this.baseUrl}/${endpoint}`;
    return this.http.get<T>(url, options);
  }

  post<T>(
    endpoint: string,
    body: any | null,
    options?: {
      headers?: HttpHeaders;
      params?: HttpParams;
      responseType?: 'json';
    }
  ): Observable<T> {
    const url = `${this.baseUrl}/${endpoint}`;
    return this.http.post<T>(url, body, options);
  }

  // We can also implement other HTTP methods (PUT, DELETE, etc.).
}
