import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestBookRoutingModule } from './request-book-routing.module';
import { NgbModule, NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReqBookComponent } from './req-book/req-book.component';
import { AsideReqComponent } from './aside-req/aside-req.component';
import { ChildReqComponent } from './child-req/child-req.component';
import { ReqInformationComponent } from './req-information/req-information.component';
import { FormsModule } from '@angular/forms';
import { InsertReqComponent } from './insert-req/insert-req.component';

@NgModule({
  declarations: [
    ReqBookComponent,
    AsideReqComponent,
    ChildReqComponent,
    ReqInformationComponent,
    InsertReqComponent
    
  ],
  imports: [
    CommonModule,
    RequestBookRoutingModule,
    NgxPaginationModule,
    FormsModule,
    NgbModule,
    NgbPaginationModule, NgbAlertModule
  ]
})
export class RequestBookModule { }
