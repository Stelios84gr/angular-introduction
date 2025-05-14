import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { User, Credentials } from '../interfaces/user';

const API_URL = `${environment.apiURL}/api/users`;
const API_URL_AUTH = `${environment.apiURL}/api/auth`

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http: HttpClient = inject(HttpClient)

  registerUser(user: User) {
    return this.http.post<{status: boolean, data: User}>(`${API_URL}`, user);
  }

  loginUser(credentials: Credentials) {
    return this.http.post<{status:boolean, data:string}>(
      `${API_URL_AUTH}/login`,credentials
    )
  }

  // logoutUser() {
  //   this.user$.set(null);
  //   localStorage.removeItem('access_token');
  //   this.router.navigate(['login']);
  }

  // isTokenExpired(): boolean {
  //   const token = localStorage.getItem('access_token');
  //   if (!token) return true;

  //   return true;

  //   try {
  //     const decoded = jwtDecode(token);
  //     const exp = decoded.exp;  // .exp: expire date
  //   }
  // }
