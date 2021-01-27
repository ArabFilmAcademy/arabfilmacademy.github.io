import { Component, Input, OnInit } from '@angular/core';
import { Initiative } from '@app/initiative/initiative';

@Component({
  selector: 'app-initiative-card',
  templateUrl: './initiative-card.component.html',
  styleUrls: ['./initiative-card.component.scss'],
})
export class InitiativeCardComponent implements OnInit {
  @Input() initiative: Initiative;
  @Input() category: number;
  constructor() {}

  ngOnInit(): void {}
}
