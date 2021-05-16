import {Component, Inject, OnInit} from '@angular/core';
import {UserRequest} from "../../../core/models/UserModels";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-team-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {
  userRequest: UserRequest = new UserRequest();

  constructor(private dialogRef: MatDialogRef<UserSettingsComponent>,
              @Inject(MAT_DIALOG_DATA) private data: TeamSettingsData) { }

  ngOnInit(): void {
    if (this.data?.request) {
      this.userRequest = this.data.request;
    }
  }

  returnRequest() {
    this.dialogRef.close(this.userRequest);
  }
}

export interface TeamSettingsData{
  request: UserRequest
}
