import { Component, OnInit } from '@angular/core';
import { InitiativeCategory } from '@app/initiative/initiative';
import { InitiativeService } from '@app/initiative/initiative.service';

@Component({
  selector: 'app-initiative',
  templateUrl: './initiative.component.html',
  styleUrls: ['./initiative.component.scss'],
})
export class InitiativeComponent implements OnInit {
  isLoading = false;
  initiativeCategories: InitiativeCategory[];

  constructor(private initiativeService: InitiativeService) {}

  ngOnInit(): void {
    this.getInitiativesCategories();
  }

  getInitiativesCategories(): void {
    this.initiativeService
      .getInitiativeCategories()
      .subscribe((categories) => (this.initiativeCategories = categories));
  }
}
