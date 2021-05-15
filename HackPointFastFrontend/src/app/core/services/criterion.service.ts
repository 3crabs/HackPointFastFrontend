import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CreationCriterionRequest, CriterionResponse} from "../models/CriterionModels";

@Injectable({
  providedIn: 'root'
})
export class CriterionService {

  baseUrl = 'admin/criterion';

  constructor(private http: HttpClient) { }

  getCriterions() {
    return this.http.get<CriterionResponse[]>(this.baseUrl);
  }

  createCriterion(request: CreationCriterionRequest) {
    return this.http.post<CriterionResponse>(this.baseUrl, request);
  }

  deleteCriterionByID(id: number) {
    return this.http.delete<CriterionResponse>(`${this.baseUrl}/${id}`);
  }
}
