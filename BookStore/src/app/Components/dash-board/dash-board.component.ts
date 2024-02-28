import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Sevices/book.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {
  booksList: { bookID: number, title: string, description: string, author: string, price: number, bookImg: string, quantitys: number }[] = []
  constructor(private bookService:BookService) { }

  ngOnInit(): void {}
}
