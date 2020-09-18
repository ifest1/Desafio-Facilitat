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

  isAlreadyLiked(token, postId) {
    var headers = getHeaders(token);
    return this.http.get(this.url.concat('/', postId), headers)
  }

  postLike(token, postId) {
    var headers = getHeaders(token);

    if(!this.isAlreadyLiked)
      return this.http.post(this.url, postId, headers);

    return this.http.delete(this.url.concat('/', postId), headers);
  }
}
