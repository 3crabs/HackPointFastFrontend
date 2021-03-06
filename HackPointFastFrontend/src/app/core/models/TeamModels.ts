export interface TeamResponse{
  id: number;
  name: string;
  nameProject: string;
  descriptionTeam: string;
  descriptionReferee: string;
  statusFirstPitch: StatusPitchEnum;
  statusSecondPitch: StatusPitchEnum;
  statusFinalPitch: StatusPitchEnum;
  isBlocked: string;
  createdAt: number;
  amountReferee: number;
  amountNotReferee: number;
  amountAll: number;
}

export enum StatusPitchEnum {
  UNMARKED = 'unmarked',
  PRESENT = 'present',
  NOTPRESENT = 'not_present'
}

export class TeamRequest{
  name: string;
  nameProject: string;
  descriptionTeam: string;
  descriptionReferee:	string;
  statusFirstPitch: StatusPitchEnum;
  statusSecondPitch: StatusPitchEnum;
  statusFinalPitch: StatusPitchEnum;
  amountReferee: number;
  amountNotReferee: number;
  amountAll: number;

  public createFromResponse(team: TeamResponse) {
    this.name = team.name;
    this.nameProject = team.nameProject;
    this.descriptionTeam = team.descriptionTeam;
    this.descriptionReferee = team.descriptionReferee;
    this.statusFirstPitch = team.statusFirstPitch;
    this.statusSecondPitch = team.statusSecondPitch;
    this.statusFinalPitch = team.statusFinalPitch;
    this.amountReferee = team.amountReferee;
    this.amountNotReferee = team.amountNotReferee;
    this.amountAll = team.amountAll;
  }
}
