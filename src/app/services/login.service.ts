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
    localStorage.removeItem('user')
    return true;
  }

  //get token
  public getToken() {
    return localStorage.getItem('token');
  }

  //set userDetail
  public setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  //get user
  public getUser(){
    let userStr = localStorage.getItem('user');
    if (userStr != null) {
      return JSON.parse(userStr);
    } else {
      this.logout();
      return null;
    }
  }

  //get user role
  public getUserRole(){
    let user = this.getUser();
    return user.authorities[0].authority;
  }

  //current user
  public getCurrentUser() {
    return this.http.get(`${this.baseUrl}/current-user`)
  }
}
