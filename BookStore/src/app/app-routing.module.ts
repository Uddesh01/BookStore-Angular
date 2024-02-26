import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './Components/dash-board/dash-board.component';
import { DisplayBookComponent } from './Components/display-book/display-book.component';

const routes: Routes = [
  {path:"", component:DashBoardComponent},
  {path:"display-book", component:DisplayBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
