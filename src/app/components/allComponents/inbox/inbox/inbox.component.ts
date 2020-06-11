import { Component, OnInit } from '@angular/core';
import { AuthUserService } from 'src/app/Services/userAuth/auth-user.service';
import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {

  userId='';
  inboxArray:[];
  senderArray:[];
  constructor(
    private authService:AuthUserService,
    private userService:UserService
  ) { }

  ngOnInit() {
    if (localStorage.getItem("userData") != null) {
      const userAuthData = localStorage.getItem('userData');
      const userAuth = JSON.parse(userAuthData);
     
    this.userId=userAuth.id;
    console.log(this.userId);
    this.userService.sendUserIdSocketForInbox(this.userId);
    this.userService.getInboxBySocket().subscribe(
      data=>{
        this.inboxArray=data;
  
        console.log(this.inboxArray);
      }
    );
  }
}

}
