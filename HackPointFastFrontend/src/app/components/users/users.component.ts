import {Component, OnInit} from '@angular/core';
import {UserRequest, UserResponse} from "../../core/models/UserModels";
import {TeamService} from "../../core/services/referee.service";
import {MatDialog} from "@angular/material/dialog";
import {TeamSettingsData, UserSettingsComponent} from "./user-settings/user-settings.component";
import {mergeMap} from "rxjs/operators";

@Component({
  selector: 'app-teams',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: UserResponse[] = [];
  displayedColumns = ['name', 'surname', 'type', 'login', 'actions'];

  constructor(private teamService: TeamService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    let request = new UserRequest();
    this.teamService.getUsers().subscribe(res => {
      this.users = res;
    });
  }

  createUser() {
    let dialog = this.dialog.open<any, any, UserRequest>(UserSettingsComponent);
    dialog.afterClosed().pipe(mergeMap(x => {
      return this.teamService.createUser(x);
    })).subscribe(res => {
      this.loadUsers();
    })
  }

  editUser(element: UserResponse) {
    let request = new UserRequest();
    request.createFromResponse(element);
    let dialog = this.dialog.open<any, TeamSettingsData, UserRequest>(UserSettingsComponent, {
      data: {request}
    });
    dialog.afterClosed().pipe(mergeMap(x => {
      return this.teamService.updateUserById(element.id, x);
    })).subscribe(res => {
      this.loadUsers();
    })
  }

  deleteUser(element: UserResponse) {
    this.teamService.deleteUserById(element.id)
      .subscribe(res => {
        this.loadUsers();
      })
  }
}
