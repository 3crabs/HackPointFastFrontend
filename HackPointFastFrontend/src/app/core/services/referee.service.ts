import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CreationCriterionRequest, CriterionResponse} from "../models/CriterionModels";
import {map} from "rxjs/operators";
import {EUserRole, UserRequest, UserResponse} from "../models/UserModels";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  baseUrl = 'admin/referee';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<UserResponse[]>(this.baseUrl);
  }

  createUser(request: UserRequest) {
    return this.http.post<UserResponse>(this.baseUrl, request);
  }

  deleteUserById(id: number) {
    return this.http.delete<UserResponse>(`${this.baseUrl}/${id}`);
  }

  updateUserById(id: number, request: UserRequest){
    return this.http.put<UserResponse>(`${this.baseUrl}/${id}`, request);
  }

  updateUserRole(role: EUserRole, userId: number): Observable<boolean> {
    return this.http.patch<boolean>(`admin/user/${userId}`, {role});
  }
}
