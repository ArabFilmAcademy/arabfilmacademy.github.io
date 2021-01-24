import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';
import { Initiative } from '@app/initiative/initiative';
import { InitiativeService } from '@app/initiative/initiative.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  quote: string | undefined;
  isLoading = false;
  initiativeCategories: Initiative[];

  constructor(private initiativeService: InitiativeService) {}

  ngOnInit() {
    this.isLoading = true;
    this.initiativeService
      .getInitiativeCategories()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((categories) => {
        this.initiativeCategories = categories.slice(0, 3);
      });
  }
}
