import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/User/user.service';
import { ActivatedRoute } from '@angular/router';
import { AuthUserService } from 'src/app/Services/userAuth/auth-user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  sendId='';
  messagesArray:[];
  userAuthData :any;
  userAuth :any;
  userId:any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private authService: AuthUserService
  ) { }

  ngOnInit() {
    if (localStorage.getItem("userData") != null) {
      // this.userAuthData = localStorage.getItem('userData');
      // this.userAuth = JSON.parse(this.userAuthData);
      this.userId=this.authService.userData.id;
      console.log(this.userId);
    this.sendId = this.activatedRoute.snapshot.paramMap.get('id');
    this.userService.sendUserIdSocketForSpecificInbox(this.userId,this.sendId);
    this.userService.getSpecificInboxBySocket().subscribe(
      data=>{
        this.messagesArray=data;
        console.log(this.messagesArray);
      }
    );
  }}

  onSubmit(sendMsg: NgForm) {
    const message = sendMsg.value.message;
    console.log("sent"+this.userId+" "+this.sendId+" "+message);

    this.userService.sendMsg(this.sendId,message).subscribe(
      data=>{
        console.log("sent"+this.userId+" "+this.sendId+" "+message);
        this.userService.sendUserIdSocketForSpecificInbox(this.userId,this.sendId);
        this.userService.getSpecificInboxBySocket().subscribe(
          dataMsg=>{
            this.messagesArray=dataMsg;
            console.log(this.messagesArray);
          }
        );
        sendMsg.reset();
      }
    );
  }

}

