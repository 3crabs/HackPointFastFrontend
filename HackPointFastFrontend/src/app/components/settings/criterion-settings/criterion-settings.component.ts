import {Component, Inject, OnInit} from '@angular/core';
import {CreationCriterionRequest} from "../../../core/models/CriterionModels";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";

export interface CriterionSettingsData {
  request: CreationCriterionRequest
}

@Component({
  selector: 'app-criterion-settings',
  templateUrl: './criterion-settings.component.html',
  styleUrls: ['./criterion-settings.component.scss']
})
export class CriterionSettingsComponent implements OnInit {

  criterionRequest = new CreationCriterionRequest('', '', 0);

  constructor(private dialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) private data: CriterionSettingsData,
              private dialogRef: MatDialogRef<CriterionSettingsComponent>) { }

  ngOnInit(): void {
    if (this.data?.request) {
      this.criterionRequest = this.data.request;
    }
  }

  returnRequest() {
    console.log(this.criterionRequest);
    this.dialogRef.close(this.criterionRequest);
  }
}
