import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/User/user.service';
import { AdsService } from 'src/app/Services/Ads/ads.service';
import { BookService } from 'src/app/Services/Book/book.service';

@Component({
  selector: 'app-first-statistical',
  templateUrl: './first-statistical.component.html',
  styleUrls: ['./first-statistical.component.scss']
})
export class FirstStatisticalComponent implements OnInit {

  numOfUsers=0;
  numOfBooks=0;
  numOfAds=0;

  constructor(
    private userServices:UserService,
    private adsServices:AdsService,
    private bookServices:BookService) {
   }

  ngOnInit() {

    // get all number users
    this.userServices.getNumOfUser().subscribe(user=>{
      this.numOfUsers=user.numberOfUsers;
      console.log(user.numberOfUsers);
    });
    // get all number books
    this.bookServices.getNumOfBooks().subscribe(book=>{
      this.numOfBooks=book.numberOfBooks;
    });
    // get all number ads
    this.adsServices.getNumOfAds().subscribe(ads=>{
      this.numOfAds=ads.numberOfAds;
    });
  }

}
