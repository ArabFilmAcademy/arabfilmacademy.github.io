import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';
import { About } from '@app/about/about';
import { AboutService } from '@app/about/about.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  version: string | null = environment.version;
  isLoading = false;
  aboutSections: About[];

  constructor(private aboutService: AboutService) {}

  ngOnInit() {
    this.aboutService
      .getAboutSections()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((aboutSections) => {
        this.isLoading = true;
        this.aboutSections = aboutSections;
      });
  }
}
