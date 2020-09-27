import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getHeaders, BASE_URL } from './config';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url: string = BASE_URL.concat('/posts');
  constructor(private http: HttpClient) { }

  post(token, formData) {
    var headers = getHeaders(token);
    console.log(formData);
    return this.http.post(this.url, formData, headers);
  }
}

