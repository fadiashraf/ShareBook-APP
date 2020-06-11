import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReqBookComponent } from './req-book/req-book.component';
import { ReqInformationComponent } from './req-information/req-information.component';
import { InsertReqComponent } from './insert-req/insert-req.component';

const routes: Routes = [
  {
    path: '',
    component: ReqBookComponent
  },
  {
    path: 'add',
    component: InsertReqComponent
  },
  {
    path: ':id',
    component: ReqInformationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestBookRoutingModule { }
