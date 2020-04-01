import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newQuote = new Quote('" "',"","",new Date());
  @Output() publishQuote = new EventEmitter<Quote>();

  submitQuote(){
    this.publishQuote.emit(this.newQuote);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
