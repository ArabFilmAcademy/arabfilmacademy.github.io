import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-initiative-details',
  templateUrl: './initiative-details.component.html',
  styleUrls: ['./initiative-details.component.scss'],
})
export class InitiativeDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      console.log(params.get('id'), params.get('cat_id'));
    });
  }
}
