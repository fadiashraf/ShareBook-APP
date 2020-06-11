import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/User/user.service';
import { AdsService } from 'src/app/Services/Ads/ads.service';

@Component({
  selector: 'app-aside-ads',
  templateUrl: './aside-ads.component.html',
  styleUrls: ['./aside-ads.component.scss']
})
export class AsideAdsComponent implements OnInit {

  popularUsers:[];
  popularAds:[];
  constructor(
    private userServices:UserService,
    private adsServices:AdsService) { }

  ngOnInit() {
    this.adsServices.getMostPopularAds().subscribe(
      mostAds=>{
        this.popularAds=mostAds;
      }
    );
    this.userServices.getPopularUser().subscribe(
      popularUser=>{
        this.popularUsers=popularUser;
        console.log(this.popularUsers);
      }
      );
  }

}
