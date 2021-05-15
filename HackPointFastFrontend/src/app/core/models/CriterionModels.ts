export interface CriterionResponse{
  id: number;
  name:	string;
  description: string;
  priority: number;
}

export class CreationCriterionRequest{
  name: string;
  description: string;
  priority: number = 0;

  constructor(name, description, priority) {
    this.name = name;
    this.description = description;
    this.priority = priority
  }
}

