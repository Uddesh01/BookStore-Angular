import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/Sevices/data.service';

@Component({
  selector: 'app-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.scss']
})
export class QuickViewComponent implements OnInit {
book!:{ bookID: number, bookName: string, description: string, author: string, price: number, bookImg: string, quantitys: number };

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
   this.book=this.dataService.getBook();
   console.log(this.book.bookName)
}
}
