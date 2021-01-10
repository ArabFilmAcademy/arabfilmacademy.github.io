import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InitiativeService } from '@app/initiative/initiative.service';
import { Initiative } from '@app/initiative/initiative';

@Component({
  selector: 'app-initiative-details',
  templateUrl: './initiative-details.component.html',
  styleUrls: ['./initiative-details.component.scss'],
})
export class InitiativeDetailsComponent implements OnInit {
  initiative: Initiative;
  constructor(private initiativeService: InitiativeService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.initiativeService.getInitiative(+params.get('cat_id'), +params.get('id')).subscribe((data) => {
        this.initiative = data;
      });
    });
  }
}
