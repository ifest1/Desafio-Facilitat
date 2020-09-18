import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from './config';
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
  private url: string = BASE_URL.concat("/sessions");

  constructor(private http: HttpClient) { }

  login(email, password): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(this.url, {email, password});
  }
}
