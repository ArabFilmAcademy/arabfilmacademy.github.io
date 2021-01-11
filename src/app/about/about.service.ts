import { Injectable } from '@angular/core';
import { About } from '@app/about/about';
import * as about from '@assets/data/about.json';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  aboutSections: About[] = (about as any).default;

  constructor() {}

  getAboutSections(): Observable<About[]> {
    return of(this.aboutSections);
  }
}
