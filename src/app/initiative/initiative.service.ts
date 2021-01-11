import { Injectable } from '@angular/core';
import * as initiatives from '@assets/data/initiatives.json';
import { Initiative, InitiativeCategory } from '@app/initiative/initiative';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InitiativeService {
  initiativeCategories: InitiativeCategory[] = (initiatives as any).default;
  constructor() {}

  getInitiativeCategories(): Observable<InitiativeCategory[]> {
    return of(this.initiativeCategories);
  }
  getInitiativeCategory(id: number): Observable<InitiativeCategory> {
    return of(this.initiativeCategories.find((initiativeCategory) => initiativeCategory.id === id));
  }
  getInitiative(cat_id: number, id: number): Observable<Initiative> {
    return of(
      this.initiativeCategories
        .find((category) => category.id === cat_id)
        .initiatives.find((initiative) => initiative.id === id)
    );
  }
}
