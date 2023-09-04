import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = environment.BASE_URL;
  constructor(private http: HttpClient) { }

  //generate token
  public generateToken(loginData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/generate-token`, loginData)
  }

  //login user: set token in localStorage
  public loginUser(token: any) {
    localStorage.setItem('token', token);
    return token;
  }

  //isLogin: user is logged in or not
  public isLoggedIn() {
    let tokenStr = localStorage.getItem('token')
    if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      return false;
    } else {
      return true;
    }
  }

  //logout: remove token from local storage
  public logout() {
    localStorage.removeItem('token');
    return true;
  }
}
