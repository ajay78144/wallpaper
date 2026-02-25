import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'https://wallmagin-1.onrender.com/auth';

  constructor(private http: HttpClient) {}

  // ✅ REGISTE
  register(data: {
    name: string;
    mobile: string;
    email: string;
    password: string;
  }): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, data);
  }

  // ✅ LOGIN
  login(data: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, data).pipe(
      tap((res: any) => {
        if (res.token) {
          localStorage.setItem('token', res.token);
        }
      })
    );
  }

  // ✅ LOGOUT
  logout(): void {
    localStorage.removeItem('token');
  }

  // ✅ CHECK LOGIN
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  // ✅ GET TOKEN
  getToken(): string | null {
    return localStorage.getItem('token');
  }
}