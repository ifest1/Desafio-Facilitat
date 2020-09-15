import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  private url: string = "http://localhost:3000/posts";
  constructor(private http: HttpClient) {}
  getPosts() {
    return this.http.get(this.url);
  }
}
