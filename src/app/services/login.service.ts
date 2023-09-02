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
}
