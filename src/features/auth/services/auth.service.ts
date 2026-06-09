import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private baseUrl = 'https://backend-libros-vdpv.onrender.com/api/v1/auth';

  login(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, credentials);
  }

  register(userData: any): Observable<any> {
    console.log('AUTH SERVICE EJECUTADO');
    console.log('URL:', `${this.baseUrl}/register`);

    return this.http.post<any>(`${this.baseUrl}/register`, userData);
  }
}