import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = "http://localhost:3000/users";
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(this.url);
  }

  getUser(id) {
    return this.http.get(this.url.concat('/', id));
  }

  registerUser(user) {
    var data = this.http.post(this.url, user).subscribe((data) => {
      return data;
    });

    console.log(data);
  }

  updateUser(user) {
    return this.http.put(this.url, user).subscribe();
  }

  deleteUser(id) {
    return this.http.delete(this.url.concat('/', id)).subscribe();
  }
}
