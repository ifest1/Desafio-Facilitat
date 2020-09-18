import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { BASE_URL, getHeaders } from './config';

@Injectable({
  providedIn: 'root'
})

export class FeedService {
  private url: string = BASE_URL.concat("/posts");

  constructor(private http: HttpClient) {}
  getPosts(token) {
    var headers = getHeaders(token);
    return this.http.get(this.url, headers);
  }
}
