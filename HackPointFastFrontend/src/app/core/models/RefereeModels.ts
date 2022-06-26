export interface RefereeResponse {
  id: number;
  name: string;
  surname: string;
  type: string;
  login: string;
  password: string;
  points: RefereePointResponse[];
  notes: RefereeNoteResponse[];
}

export interface RefereePointResponse {
  id: number;
  point: number;
  criterionId: number;
  refereeId: number;
}

export interface RefereeNoteResponse {
  id: number;
  text: string;
  refereeId: number;
  criterionId: number;
}
