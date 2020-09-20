import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BASE_URL, getHeaders } from './config';

@Injectable({
  providedIn: 'root'
})

export class LikeService {
  private url: string = BASE_URL.concat("/likes");
  constructor(private http: HttpClient) {
   }

  postLike(token, postId) {
    var headers = getHeaders(token);
    return this.http.post(this.url, {post_id: postId}, headers);
  }

  getLikes(token, postId) {
    var headers = getHeaders(token);
    return this.http.post(BASE_URL.concat('/posts/likes'), {post_id: postId}, headers);
  }
}
