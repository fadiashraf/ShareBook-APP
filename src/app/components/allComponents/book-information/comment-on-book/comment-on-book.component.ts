import { Component, OnInit, Input } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { BookService } from 'src/app/Services/Book/book.service';

@Component({
  selector: 'app-comment-on-book',
  templateUrl: './comment-on-book.component.html',
  styleUrls: ['./comment-on-book.component.scss']
})
export class CommentOnBookComponent implements OnInit {

  @Input() commentOnBook :any;
  @Input() reviewsBook :number;
  @Input() rateOnBook :number;
  @Input() bookId:string;

  comments:any;
  

  
  constructor( private bookService:BookService) { }

  ngOnInit() {
  //   this.bookService.sendBookIdSocketForOldComments(this.bookId);

  //  this.bookService.getCommentsBySocket().subscribe(data=>{
  //    this.comments=data;
  //  });
  console.log(this.commentOnBook);
   
  }

}
