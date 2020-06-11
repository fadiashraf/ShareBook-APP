import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserInformationRoutingModule } from './user-information-routing.module';
import { NgbAlertModule, NgbPaginationModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { UserInfoComponent } from './user-info/user-info.component';
import { CommentOnUserComponent } from './comment-on-user/comment-on-user.component';
import { FormsModule } from '@angular/forms';
import { EditUserComponent } from './edit-user/edit-user.component';
const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
  declarations: [UserInfoComponent,CommentOnUserComponent, EditUserComponent],
  imports: [
    CommonModule,
    UserInformationRoutingModule,
    NgbModule,
    FormsModule,
    NgbPaginationModule, NgbAlertModule,
    SocketIoModule.forRoot(config),
  ]
})
export class UserInformationModule { }
