import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { SEARCH_ICON } from 'src/assets/svg-icons';

@Component({
  selector: 'app-bookstore-header',
  templateUrl: './bookstore-header.component.html',
  styleUrls: ['./bookstore-header.component.scss']
})
export class BookstoreHeaderComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry,sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconLiteral("Search-icon", sanitizer.bypassSecurityTrustHtml(SEARCH_ICON))
   }

  ngOnInit(): void {
  }

}
