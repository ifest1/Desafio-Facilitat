import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { PostResponse } from '../models/feed/post';

@Injectable({
  providedIn: 'root'
})

export class FeedService {
  private url: string = "http://localhost:3000/posts";
  constructor(private http: HttpClient) {}
  getPosts(token): Observable<PostResponse> {
    var headers = {
      headers: new HttpHeaders().set('Authorization', `${token}`)
    } 
    return this.http.get<PostResponse>(this.url, headers);
  }
}
