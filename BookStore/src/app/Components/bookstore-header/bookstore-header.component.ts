import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { BookService } from 'src/app/Sevices/book.service';
import { SEARCH_ICON } from 'src/assets/svg-icons';

@Component({
  selector: 'app-bookstore-header',
  templateUrl: './bookstore-header.component.html',
  styleUrls: ['./bookstore-header.component.scss']
})
export class BookstoreHeaderComponent implements OnInit {
  booksList: { bookID: number, title: string, description: string, author: string, price: number, bookImg: string, quantitys: number }[] = []
  constructor(iconRegistry: MatIconRegistry,sanitizer: DomSanitizer,private bookService:BookService) {
    iconRegistry.addSvgIconLiteral("Search-icon", sanitizer.bypassSecurityTrustHtml(SEARCH_ICON))
   }

  ngOnInit(): void {

}
}
