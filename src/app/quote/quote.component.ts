import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    // new Quote(1,'"Work hard today for a better tomorrow"', "Eustus", new Date(2022,0,14)),
    // new Quote(2,'"Steadfastly seeking excellence"', "Simon", new Date(2020,2,11)),
    // new Quote(3,'"Never do anything to impress others, impress yourself first"', "Joan", new Date(2018,1,11)),
  ];

  deleteQuote(isDelete, index){
    if (isDelete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete) {
        this.quotes.splice(index,1)
      }
    }
  }

  publishNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.unshift(quote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
