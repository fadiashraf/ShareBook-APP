import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/Services/Book/book.service';
import { NgForm } from '@angular/forms';
import { AuthUserService } from 'src/app/Services/userAuth/auth-user.service';
// import { runInThisContext } from 'vm';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.scss']
})
export class BookInfoComponent implements OnInit {
  
  sendId = '';
  bookInfo: [];
  bookID = "";
  comments:[];
  reviewsInfoAverage:number;
  reviewsInfoNumber:number;
  isAuthUser = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private bookService: BookService,
    private authService: AuthUserService
  ) { }

  ngOnInit() {
    if (localStorage.getItem("userData") != null) {
      let userAuth = localStorage.getItem('userData');
      userAuth = JSON.parse(userAuth);
      if (userAuth) {
        this.isAuthUser = true;
      }
    }
    this.sendId = this.activatedRoute.snapshot.paramMap.get('id');
    this.bookService.getBookInfo(this.sendId).subscribe(
      data => {
        this.bookInfo = data;
        this.bookID = data.book._id;
        this.bookService.sendBookIdSocketForOldComments(this.sendId);
        this.bookService.getCommentsBySocket().subscribe(dataSocket=>
          {
            this.comments=dataSocket.comments;
            this.reviewsInfoAverage=dataSocket.reviews.avgRating;
            this.reviewsInfoNumber=dataSocket.reviews.numberOfRates;

          });
        
        // console.log(this.bookID);

      }
    );

  }

  onSubmit(commentOnBook: NgForm) {
    const comment = commentOnBook.value.comment;
    const avgRating = commentOnBook.value.avgRating;
    const bookId = this.bookID;
    // const userId = this.authService.userData.id;
    console.log(this.bookID);
    // console.log("done without subscribe");
    console.log("bookId :" + bookId + "avgRating :" + avgRating + "comment  " + comment);
    // console.log(this.authService.userData.token);
    this.bookService.postComment(comment, avgRating, bookId).subscribe(
      data => {
        this.bookService.sendBookIdSocketForNewComments(this.sendId);
        this.bookService.getNewCommentsBySocket().subscribe(dataSocket=>
          {
            this.reviewsInfoAverage=dataSocket.reviews.avgRating;
            this.reviewsInfoNumber=dataSocket.reviews.numberOfRates;
            this.comments=dataSocket.comments;

          });
        commentOnBook.reset();
        
      }
    );
  }

}
