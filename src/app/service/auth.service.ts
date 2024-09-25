import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login, Register } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'https://japan-spa.onrender.com/api/v1/auth'

  constructor(private http: HttpClient) { }

  login(login: Login): Observable<{token: string}>{
    return this.http.post<{token: string}>(`${this.url}/login`, login);
  }

  register(register: Register): Observable<Register>{
    return this.http.post<Register>(`${this.url}/register`, register);
  }
}
