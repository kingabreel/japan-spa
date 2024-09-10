import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login, Register } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'http://localhost:8080/api/v1/auth'

  constructor(private http: HttpClient) { }

  login(login: Login): Observable<{token_access: string}>{
    return this.http.post<{token_access: string}>(`${this.url}/login`, login);
  }

  register(register: Register): Observable<Register>{
    return this.http.post<Register>(`${this.url}/register`, register);
  }
}
