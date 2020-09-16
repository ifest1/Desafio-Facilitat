import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Success {
  authentication_token: string;
  name: string;
}

interface Failure {
  status: string;
}

type AuthResponse = Success | Failure;

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url: string = "http://localhost:3000/sessions";

  constructor(private http: HttpClient) { }

  login(email, password): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(this.url, {email, password});
  }
}
