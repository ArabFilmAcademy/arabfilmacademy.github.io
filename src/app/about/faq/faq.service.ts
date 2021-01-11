import { Injectable } from '@angular/core';
import { Faq } from '@app/about/faq/faq';
import * as faqsData from '@assets/data/faq.json';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FaqService {
  faqs: Faq[] = (faqsData as any).default;

  constructor() {}

  getFaqs(): Observable<Faq[]> {
    return of(this.faqs);
  }
}
