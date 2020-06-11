import { Component, OnInit } from '@angular/core';
import { AdsService } from 'src/app/Services/Ads/ads.service';
import { AuthUserService } from 'src/app/Services/userAuth/auth-user.service';

@Component({
  selector: 'app-child-ads',
  templateUrl: './child-ads.component.html',
  styleUrls: ['./child-ads.component.scss']
})
export class ChildAdsComponent implements OnInit {

  adsList: [];
  collection = [];
  limit = 8;
  skip = 0;
  isActiveNext = true;
  isActiveBack = false;
  numOfAds = 0;
  userLoginId=this.authSerice.userData.id;
  constructor(private adsService: AdsService,
    private authSerice:AuthUserService) { }

  // ngOnInit() {
  //   this.adsService.getAllAds().subscribe(data=>{
  //     this.adsList=data;
  //     for (let i = 1; i <= this.adsList.length; i++) {
  //       this.collection.push(this.adsList[i]);
  //     }
  //     console.log(this.adsList.length);
  //   });
  // }

  ngOnInit() {
    this.adsService.getLimitAds(this.limit, this.skip).subscribe(data => {
      this.adsList = data.AllAds;
      this.numOfAds = data.adsCount;
      console.log(data);
    }
    );


  }

  nextAds() {
    this.skip += this.limit;
    this.limit += 8;
    if (this.limit > this.numOfAds) {
      this.isActiveNext = false;
    }
    this.isActiveBack=true;
    this.adsService.getLimitAds(this.limit, this.skip).subscribe(data => {
      this.adsList = data.AllAds;
    }
    );

  }

  backAds() {
    this.skip -= 8;
    this.limit -= 8;
    if (this.skip >0) {
      this.isActiveBack = true;
    }
    else
    {
      this.isActiveBack = false;
    }
    this.isActiveNext=true;
    
    this.adsService.getLimitAds(this.limit, this.skip).subscribe(data => {
      this.adsList = data.AllAds;
    }
    );

  }

}
