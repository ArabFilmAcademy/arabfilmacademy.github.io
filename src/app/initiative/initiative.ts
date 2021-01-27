export interface InitiativeCategory {
  id: number;
  title: string;
  description: string;
  initiatives: Initiative[];
  goals?: InitiativeGoal[];
  created: string;
}
export class Initiative {
  id: number;
  title: string;
  description: string;
  version?: string;
  tasks?: InitiativeTask[];
  goals?: InitiativeGoal[];
  specifications?: InitiativeSpecification[];
  created: string;
}
export interface InitiativeTask {
  id: number;
  name: string;
  description?: string;
  done: boolean;
  created: string;
  modified: string;
}
export interface InitiativeGoal {
  id: number;
  name: string;
  description?: string;
  created: string;
}
export interface InitiativeSpecification {
  title: string;
  list: string[];
}
