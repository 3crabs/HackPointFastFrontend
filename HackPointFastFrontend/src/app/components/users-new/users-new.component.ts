import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserResponse} from "../../core/models/UserModels";
import {TeamService} from "../../core/services/referee.service";

@Component({
  selector: 'app-users-new',
  templateUrl: './users-new.component.html',
  styleUrls: ['./users-new.component.scss']
})
export class UsersNewComponent implements OnInit {

  public users: UserResponse[] = [];

  constructor(private activatedRoute: ActivatedRoute, private teamService: TeamService) { }

  ngOnInit(): void {
    this.users = this.activatedRoute.snapshot.data.users;
    console.log(this.users);
  }

  changeVerified(user: UserResponse, $event: { checked: boolean }): void {
    if ($event.checked === true) {
      this.teamService.updateUserRole(user.role, user.id).subscribe((res) => {
        console.log(res);
      })
    }
  }
}
