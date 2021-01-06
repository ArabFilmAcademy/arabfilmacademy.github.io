import { Component, OnInit } from '@angular/core';
import { Initiative } from '@app/initiative/initiative';

@Component({
  selector: 'app-initiative',
  templateUrl: './initiative.component.html',
  styleUrls: ['./initiative.component.scss'],
})
export class InitiativeComponent implements OnInit {
  isLoading = false;
  initiative = Initiative;

  constructor() {}

  ngOnInit(): void {}
}
