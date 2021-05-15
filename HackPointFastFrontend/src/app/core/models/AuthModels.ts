export class RefereeLoginRequest {
  login: string;
  password: string;
  isMobile: boolean;
}

export class SuccessResponse {
  status: string;
  message: string;
  token: string;
}
