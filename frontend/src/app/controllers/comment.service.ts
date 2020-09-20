import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { BASE_URL, getHeaders } from './config'

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private url: string = BASE_URL;
  constructor(private http: HttpClient) { }

  getComments(token, postId) {
    var headers = getHeaders(token);
    return this.http.post(this.url.concat('/posts/comments'),{post_id: postId}, headers);
  }

  postComment(token, postId, text) {
    var headers = getHeaders(token);
    return this.http.post(this.url.concat('/comments'), {post_id: postId, text:text}, headers);
  }
}
