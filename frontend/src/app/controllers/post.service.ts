import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getHeaders, BASE_URL } from './config';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url: string = BASE_URL.concat('/posts');
  constructor(private http: HttpClient) { }

  post(token, postText) {
    var headers = getHeaders(token);
    console.log(postText);
    return this.http.post(this.url, {text: postText}, headers);
  }
}

