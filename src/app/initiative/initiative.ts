export class Initiative {
  id: number;
  category: InitiativeCategory;
  tasks?: InitiativeTask[];
  created: string;
}
export interface InitiativeCategory {
  id: number;
  title: string;
  description: string;
  created: string;
}
export interface InitiativeTask {
  id: number;
  task: string;
  description: string;
  done: boolean;
  created: string;
  modified: string;
}
