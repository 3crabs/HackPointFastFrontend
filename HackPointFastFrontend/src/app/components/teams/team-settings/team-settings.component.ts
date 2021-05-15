import {Component, Inject, OnInit} from '@angular/core';
import {TeamRequest} from "../../../core/models/TeamModels";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-team-settings',
  templateUrl: './team-settings.component.html',
  styleUrls: ['./team-settings.component.scss']
})
export class TeamSettingsComponent implements OnInit {
  teamRequest: TeamRequest = new TeamRequest();

  constructor(private dialogRef: MatDialogRef<TeamSettingsComponent>,
              @Inject(MAT_DIALOG_DATA) private data: TeamSettingsData) { }

  ngOnInit(): void {
    if (this.data?.request) {
      this.teamRequest = this.data.request;
    }
  }

  returnRequest() {
    this.dialogRef.close(this.teamRequest);
  }
}

export interface TeamSettingsData{
  request: TeamRequest
}
