import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InboxRoutingModule } from './inbox-routing.module';
import { InboxComponent } from './inbox/inbox.component';
import { ChatComponent } from './chat/chat.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
  declarations: [InboxComponent,ChatComponent],
  imports: [
    CommonModule,
    FormsModule,
    InboxRoutingModule,
    SocketIoModule.forRoot(config)
  ]
})
export class InboxModule { }
