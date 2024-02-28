import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './Components/dash-board/dash-board.component';
import { DisplayBookComponent } from './Components/display-book/display-book.component';
import { BookContainerComponent } from './Components/book-container/book-container.component';

const routes: Routes = [
  { path: "", component: DashBoardComponent },
  { path: "displaybook", component: DisplayBookComponent },
  { 
    path: "dashboard",
    component: DashBoardComponent,
    children: [
      { path: "books", component: BookContainerComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
