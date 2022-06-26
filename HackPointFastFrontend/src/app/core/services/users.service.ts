import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UsersServiceUrls} from "../models/enums/urls.enum";
import {Observable} from "rxjs";
import {UserResponse} from "../models/UserModels";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<UserResponse[]> {
    return this.http.get<UserResponse[]>(UsersServiceUrls.getUser);
  }
}
