import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Services/Book/book.service';

@Component({
  selector: 'app-picked-auther',
  templateUrl: './picked-auther.component.html',
  styleUrls: ['./picked-auther.component.scss']
})
export class PickedAutherComponent implements OnInit {

  popularBook:[];
  constructor(private bookService:BookService) { }

  ngOnInit() {
    this.bookService.getPopularBook().subscribe(
      data=>{
        this.popularBook=data;
      }
    );
  }

}
