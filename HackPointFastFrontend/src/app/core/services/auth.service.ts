import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RefereeLoginRequest} from "../models/AuthModels";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  urls = {
    login: 'login',
    logout: 'logout',
    checkCookie: 'login/check'
  }

  constructor(private http: HttpClient) { }

  login(request: RefereeLoginRequest) {
    return this.http.post(this.urls.login, request);
  }
}
