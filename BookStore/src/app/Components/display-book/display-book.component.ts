import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-book',
  templateUrl: './display-book.component.html',
  styleUrls: ['./display-book.component.scss']
})
export class DisplayBookComponent implements OnInit {
  @Input() book!: { bookID: number, bookName: string, description: string, author: string, price: number, bookImg: string, quantitys: number };

  constructor() { }

  ngOnInit(): void {
    console.log('Received book:', this.book);
  }
}
