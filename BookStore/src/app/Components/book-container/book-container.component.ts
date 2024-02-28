import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Sevices/book.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-book-container',
  templateUrl: './book-container.component.html',
  styleUrls: ['./book-container.component.scss']
})
export class BookContainerComponent implements OnInit {
  booksList: { bookID: number, bookName: string, description: string, author: string, price: number, bookImg: string, quantitys: number }[] = []
  constructor(public bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe(
      (res:any) => {
        this.booksList = res.data;
        console.log(this.booksList)
      },
      err => {
        console.log(err);
      });
  }
}
