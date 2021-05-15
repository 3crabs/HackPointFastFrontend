import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CreationCriterionRequest, CriterionResponse} from "../models/CriterionModels";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CriterionService {

  baseUrl = 'admin/criterion';

  constructor(private http: HttpClient) { }

  getCriterions() {
    return this.http.get<CriterionResponse[]>(this.baseUrl).pipe(map(
      x => x.sort(this.compareFunc)
    ));
  }

  compareFunc(a, b){//Просто сортирую по приоритету типа
    if (a.priority > b.priority) {
      return 1;
    }
    if (a.priority < b.priority) {
      return -1;
    }
    // a должно быть равным b
    return 0;
  }

  createCriterion(request: CreationCriterionRequest) {
    return this.http.post<CriterionResponse>(this.baseUrl, request);
  }

  deleteCriterionById(id: number) {
    return this.http.delete<CriterionResponse>(`${this.baseUrl}/${id}`);
  }

  updateCriterionById(id: number, request: CreationCriterionRequest){
    return this.http.put<CriterionResponse>(`${this.baseUrl}/${id}`, request);
  }
}
