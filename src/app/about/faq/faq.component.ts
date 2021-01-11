import { Component, OnInit } from '@angular/core';
import { Faq } from '@app/about/faq/faq';
import { FaqService } from '@app/about/faq/faq.service';
import { finalize } from 'rxjs/operators';
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent implements OnInit {
  isLoading = false;
  panelOpenState = false;
  faqs: Faq[];
  constructor(private faqService: FaqService) {}

  ngOnInit(): void {
    this.faqService
      .getFaqs()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((faqs) => {
        this.isLoading = true;
        this.faqs = faqs;
      });
  }
}
