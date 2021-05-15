import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CreationCriterionRequest, CriterionResponse} from "../models/CriterionModels";
import {map} from "rxjs/operators";
import {TeamRequest, TeamResponse} from "../models/TeamModels";

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  baseUrl = 'admin/team';

  constructor(private http: HttpClient) { }

  getTeams() {
    return this.http.get<TeamResponse[]>(this.baseUrl);
  }

  createTeam(request: TeamRequest) {
    return this.http.post<TeamResponse>(this.baseUrl, request);
  }

  deleteTeamById(id: number) {
    return this.http.delete<TeamResponse>(`${this.baseUrl}/${id}`);
  }

  updateTeamById(id: number, request: TeamRequest){
    return this.http.put<TeamResponse>(`${this.baseUrl}/${id}`, request);
  }
}
