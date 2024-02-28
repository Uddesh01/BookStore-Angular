import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Sevices/data.service';

@Component({
  selector: 'app-display-book',
  templateUrl: './display-book.component.html',
  styleUrls: ['./display-book.component.scss']
})
export class DisplayBookComponent implements OnInit {
  @Input() book!: { bookID: number, bookName: string, description: string, author: string, price: number, bookImg: string, quantitys: number };
  @Output() bookClicked = new EventEmitter<{bookID: number,bookName: string,description: string,author: string,price: number,bookImg: string,quantitys: number}>();
  
  constructor(private router:Router,private dataService:DataService) { }

  ngOnInit(): void {
  }

  handleBookClick() {
    this.dataService.setBook(this.book)
    this.router.navigate(['/dashboard/quickview']);
  }
}
