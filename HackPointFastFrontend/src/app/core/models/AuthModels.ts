export class RefereeLoginRequest {
  login: string;
  password: string;
}

export class SuccessResponse {
  status: string;
  message: string;
  token: string;
}
