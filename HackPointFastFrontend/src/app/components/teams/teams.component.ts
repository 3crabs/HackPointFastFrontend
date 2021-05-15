import { Component, OnInit } from '@angular/core';
import {TeamRequest, TeamResponse} from "../../core/models/TeamModels";
import {TeamService} from "../../core/services/team.service";
import {MatDialog} from "@angular/material/dialog";
import {TeamSettingsComponent, TeamSettingsData} from "./team-settings/team-settings.component";
import {mergeMap} from "rxjs/operators";

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  teams: TeamResponse[] = [];
  displayedColumns = ['name', 'actions'];

  constructor(private teamService: TeamService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadTeams();
  }

  loadTeams() {
    let request = new TeamRequest();
    this.teamService.getTeams().subscribe(res => {
      this.teams = res;
    });
  }

  createTeam() {
    let dialog = this.dialog.open<any, any, TeamRequest>(TeamSettingsComponent);
    dialog.afterClosed().pipe(mergeMap(x => {
      return this.teamService.createTeam(x);
    })).subscribe(res => {
      this.loadTeams();
    })
  }

  editTeam(element: TeamResponse) {
    let request = new TeamRequest();
    request.createFromResponse(element);
    let dialog = this.dialog.open<any, TeamSettingsData, TeamRequest>(TeamSettingsComponent, {
      data: {request}
    });
    dialog.afterClosed().pipe(mergeMap(x => {
      return this.teamService.updateTeamById(element.id, x);
    })).subscribe(res => {
      this.loadTeams();
    })
  }

  deleteTeam(element: TeamResponse) {
    this.teamService.deleteTeamById(element.id)
      .subscribe(res => {
        this.loadTeams();
      })
  }
}
