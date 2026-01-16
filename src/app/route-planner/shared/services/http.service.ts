import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private baseUrl = 'https://api.dev.zignexlogistics.com/zexrp'; // Example API base URL
  constructor(private http: HttpClient) {}

  // Example GET request with optional params
  getData(
    endpoint: string,
    params?: { [key: string]: string | number }
  ): Observable<any> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        httpParams = httpParams.set(key, params[key].toString());
      });
    }
    return this.http.get(`${this.baseUrl}/${endpoint}`, { params: httpParams });
  }
  // Example GET request with optional params
  getPromiseData(
    endpoint: string,
    params?: { [key: string]: string | number }
  ): Promise<any> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        httpParams = httpParams.set(key, params[key].toString());
      });
    }
    return lastValueFrom(
      this.http.get(`${this.baseUrl}/${endpoint}`, { params: httpParams })
    );
  }
  // Example POST request
  postData(endpoint: string, body: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/${endpoint}`, body);
  }
  
  postDataText(
    endpoint: string, 
    body: any, 
    params?: { [key: string]: string | number }
  ): Observable<string> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        httpParams = httpParams.set(key, params[key].toString());
      });
    }
    return this.http.post(`${this.baseUrl}/${endpoint}`, body, { 
        params: httpParams,
        responseType: 'text' 
    });
  }
  postPromiseData(
    endpoint: string,
    body: any,
    params?: { [key: string]: string | number },
    headers?: { [key: string]: string }
  ): Promise<any> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        httpParams = httpParams.set(key, params[key].toString());
      });
    }

    let httpHeaders = new HttpHeaders();
    if (headers) {
      Object.keys(headers).forEach((key) => {
        httpHeaders = httpHeaders.set(key, headers[key]);
      });
    }

    return lastValueFrom(
      this.http.post(`${this.baseUrl}/${endpoint}`, body, {
        params: httpParams,
        headers: httpHeaders,
        responseType: 'arraybuffer',
      })
    );
  }
}
