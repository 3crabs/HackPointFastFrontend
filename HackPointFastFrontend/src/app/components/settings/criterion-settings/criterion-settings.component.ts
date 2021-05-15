import {Component, Inject, OnInit} from '@angular/core';
import {CreationCriterionRequest} from "../../../core/models/CriterionModels";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-criterion-settings',
  templateUrl: './criterion-settings.component.html',
  styleUrls: ['./criterion-settings.component.scss']
})
export class CriterionSettingsComponent implements OnInit {

  criterionRequest = new CreationCriterionRequest();

  constructor(private dialog: MatDialog,
              private dialogRef: MatDialogRef<CriterionSettingsComponent>) { }

  ngOnInit(): void {
  }

  returnRequest() {
    console.log(this.criterionRequest);
    this.dialogRef.close(this.criterionRequest);
  }
}
