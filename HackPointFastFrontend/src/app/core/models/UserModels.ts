export interface UserResponse {
  id: number;
  name: string;
  surname: string;
  type: Type;
  login: string;
  password: string;
}

export enum Type {
  REFERER = 'main',
  EXPERT = 'regular'
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
    this.type = user.type;
    this.login = user.login;
    this.password = user.password;
  }
}
