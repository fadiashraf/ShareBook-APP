import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };


import { BookInformationRoutingModule } from './book-information-routing.module';
import { BookInfoComponent } from './book-info/book-info.component';
import { CommentOnBookComponent } from './comment-on-book/comment-on-book.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [BookInfoComponent,CommentOnBookComponent],
  imports: [
    CommonModule,
    BookInformationRoutingModule,
    FormsModule,
    NgbModule,
    NgbPaginationModule, NgbAlertModule,
    SocketIoModule.forRoot(config)
  ]
})
export class BookInformationModule { }
