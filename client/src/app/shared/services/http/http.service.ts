import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  get = (url: string) => this.httpClient.get(url);

  post = (url: string, body: string) => this.httpClient.post(url, body);
}
