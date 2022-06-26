import {RefereeResponse} from "./RefereeModels";

export interface UserResponse {
  id: number;
  name: string;
  surname: string;
  login: string;
  github: string;
  isVerified: boolean;
  createdAt: number;
  teamId: number;
  role: EUserRole;
  referee: RefereeResponse;
}

export enum Type {
  REFERER = 'main',
  EXPERT = 'regular'
}

export enum EUserRole {
  participant = 'participant',
  referee = 'referee',
  organizer = 'organizer',
  expert = 'expert',
  partner = 'partner'
}

export class UserRequest {
  name: string;
  surname: string;
  type: Type;
  login: string;
  password: string;

  public createFromResponse(user: UserResponse) {
    this.name = user.name;
    this.surname = user.surname;
    this.login = user.login;
  }
}
