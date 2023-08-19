import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = environment.BASE_URL;

  constructor(private http: HttpClient) { }

  //add user
  public addUser(payload: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/user/`, payload);
  }
}
