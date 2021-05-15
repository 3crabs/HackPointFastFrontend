import { Component, OnInit } from '@angular/core';
import {CriterionService} from "../../core/services/criterion.service";
import {CreationCriterionRequest, CriterionResponse} from "../../core/models/CriterionModels";
import {MatDialog} from "@angular/material/dialog";
import {CriterionSettingsComponent} from "./criterion-settings/criterion-settings.component";
import {mergeMap} from "rxjs/operators";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  public criterionData: CriterionResponse[] = [];

  public displayedColumns: string[] = ['name', 'description', 'actions'];

  constructor(private criterionService: CriterionService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadCriterion();
  }

  public deleteCriterion(element: CriterionResponse) {
    this.criterionService.deleteCriterionByID(element.id)
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
}
