import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = "http://localhost:3000/users";
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(this.url).subscribe();
  }

  getUser(id) {
    return this.http.get(this.url.concat('/', id)).subscribe();
  }

  registerUser(user) {
    return this.http.post(this.url, user).subscribe();
  }

  updateUser(user) {
    return this.http.put(this.url, user).subscribe();
  }

  deleteUser(id) {
    return this.http.delete(this.url.concat('/', id)).subscribe();
  }
}
