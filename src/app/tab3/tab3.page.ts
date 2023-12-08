import { Component, OnInit } from '@angular/core';
import { FaqService, PreguntaFrecuente } from '../core/services/faq.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page implements OnInit{
  faqs: PreguntaFrecuente [] = [];

  

  constructor(private faqService: FaqService) {}
  ngOnInit() {
    this.faqs = this.faqService.obtenerFaqs();

  }
  

}
