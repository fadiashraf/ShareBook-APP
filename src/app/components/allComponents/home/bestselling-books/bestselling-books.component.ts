import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { RequestService } from 'src/app/Services/Request/request.service';
@Component({
  selector: 'app-bestselling-books',
  templateUrl: './bestselling-books.component.html',
  styleUrls: ['./bestselling-books.component.scss']
})
export class BestsellingBooksComponent implements OnInit {

  max: number = 5;
  rate: number = 3;
  isReadonly: boolean = true;
  sixRequest:[];

  constructor(
    private requestService:RequestService
  ) { }

  ngOnInit() {
    this.requestService.getLastReq().subscribe(
      data=>{
        this.sixRequest=data;
      }
    );
  }

}
