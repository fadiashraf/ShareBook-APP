import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/User/user.service';
import { AuthUserService } from 'src/app/Services/userAuth/auth-user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  sendId = '';
  userInfo: [];
  userID = "";
  comments:[];
  reviewsInfoAverage:number;
  reviewsInfoNumber:number;
  isAuthUser = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private authService: AuthUserService
  ) { }

  ngOnInit() {
   
    this.sendId = this.activatedRoute.snapshot.paramMap.get('id');
    this.userService.getUserInfo(this.sendId).subscribe(
      data => {
        this.userInfo = data;
        this.userService.sendUserIdSocketForOldComments(this.sendId);
        this.userService.getCommentsBySocket().subscribe(dataSocket=>
          {
            console.log(dataSocket);
            this.comments=dataSocket.comments;
            this.reviewsInfoAverage=dataSocket.reviews.avgRating;
            this.reviewsInfoNumber=dataSocket.reviews.numberOfRates;

          });
        
        // console.log(this.bookID);

      }
    );

    if (localStorage.getItem("userData") != null  ) {
      let userAuth = localStorage.getItem('userData');
      userAuth = JSON.parse(userAuth);
      if (userAuth && this.sendId != this.authService.userData.id) {
        this.isAuthUser = true;
      }
    }

  }

  onSubmit(commentOnUser: NgForm) {
    const comment = commentOnUser.value.comment;
    const avgRating = commentOnUser.value.avgRating;
    const sellerId = this.sendId;
    // const userId = this.authService.userData.id;
    console.log(this.userID);
    // console.log("done without subscribe");
    console.log("bookId :" + sellerId + "avgRating :" + avgRating + "comment  " + comment);
    // console.log(this.authService.userData.token);
    this.userService.postComment(comment, avgRating, sellerId).subscribe(
      data => {
        this.userService.sendUserIdSocketForNewComments(this.sendId);
        this.userService.getNewCommentsBySocket().subscribe(dataSocket=>
          {
            this.comments=dataSocket.comments;
            this.reviewsInfoAverage=dataSocket.reviews.avgRating;
            this.reviewsInfoNumber=dataSocket.reviews.numberOfRates;

          });
          commentOnUser.reset();
        
      }
    );
  }

}
