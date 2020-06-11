import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comment-on-user',
  templateUrl: './comment-on-user.component.html',
  styleUrls: ['./comment-on-user.component.scss']
})
export class CommentOnUserComponent implements OnInit {

  @Input() commentOnUser :any;
  @Input() reviewsUser :number;
  @Input() rateOnUser :number;
  @Input() userId:string;

  comments:any;
  constructor() { }

  ngOnInit() {
  }

}
