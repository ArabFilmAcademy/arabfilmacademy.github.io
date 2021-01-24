import { Component, OnInit } from '@angular/core';
import { InitiativeCategory } from '@app/initiative/initiative';
import { InitiativeService } from '@app/initiative/initiative.service';
import { finalize } from 'rxjs/operators';

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
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((categories) => {
        this.isLoading = true;
        this.initiativeCategories = categories;
      });
  }
}
