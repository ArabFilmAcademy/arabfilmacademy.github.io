import { Component, OnInit } from '@angular/core';
import { InitiativeCategory } from '@app/initiative/initiative';
import { ActivatedRoute } from '@angular/router';
import { InitiativeService } from '@app/initiative/initiative.service';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-initiative-category',
  templateUrl: './initiative-category.component.html',
  styleUrls: ['./initiative-category.component.scss'],
})
export class InitiativeCategoryComponent implements OnInit {
  initiativeCategory: InitiativeCategory;
  constructor(
    private initiativeService: InitiativeService,
    private titleService: Title,
    private metaService: Meta,
    private translateService: TranslateService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.initiativeService.getInitiativeCategory(+params.get('id')).subscribe((data) => {
        this.initiativeCategory = data;
        this.titleService.setTitle(
          this.translateService.instant('Initiatives') + ' | ' + this.initiativeCategory?.title
        );
      });
    });
  }
}
