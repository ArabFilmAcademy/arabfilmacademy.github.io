import { Initiative } from '../initiative';

export interface Participate {
  participant: Participant;
  initiative: Initiative;
  version: string;
  participation: string;
  content: string;
}

export interface Participant {
  id: number;
  first_name: string;
  last_name: string;
  mobile: string;
}
