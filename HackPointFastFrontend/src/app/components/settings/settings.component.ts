import { Component, OnInit } from '@angular/core';
import {CriterionService} from "../../core/services/criterion.service";
import {CreationCriterionRequest, CriterionResponse} from "../../core/models/CriterionModels";
import {MatDialog} from "@angular/material/dialog";
import {CriterionSettingsComponent, CriterionSettingsData} from "./criterion-settings/criterion-settings.component";
import {mergeMap} from "rxjs/operators";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  public criterionData: CriterionResponse[] = [];

  public displayedColumns: string[] = ['name', 'actions'];

  constructor(private criterionService: CriterionService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadCriterion();
  }

  public deleteCriterion(element: CriterionResponse) {
    this.criterionService.deleteCriterionById(element.id)
      .subscribe(res => {
        this.loadCriterion();
      })
  }

  private loadCriterion() {
    this.criterionService.getCriterions().subscribe(res => {
      this.criterionData = res;
    });
  }

  public addCriterion() {
    const dialog = this.dialog
      .open<any, any, CreationCriterionRequest>(CriterionSettingsComponent);
    dialog.afterClosed().pipe(mergeMap(res => {
      return this.criterionService.createCriterion(res);
    })).subscribe(res => {
      this.loadCriterion();
    })
  }

  public editCriterion(element: CriterionResponse) {
    let request = new CreationCriterionRequest(element.name, element.description, element.priority);
    const dialog = this.dialog
      .open<any, CriterionSettingsData, CreationCriterionRequest>
      (CriterionSettingsComponent, {
        data: {
          request
        }
      });
    dialog.afterClosed().pipe(mergeMap(res => {
      return this.criterionService.updateCriterionById(element.id, res);
    })).subscribe(res => {
      this.loadCriterion();
    })
  }
}
