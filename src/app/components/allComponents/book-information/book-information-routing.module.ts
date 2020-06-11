import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookInfoComponent } from './book-info/book-info.component';

const routes: Routes = [
  {
    path: ':id',
    component: BookInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookInformationRoutingModule { }
