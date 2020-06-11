import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  AdsService } from 'src/app/Services/Ads/ads.service';
import { AuthUserService } from 'src/app/Services/userAuth/auth-user.service';

@Component({
  selector: 'app-show-ads',
  templateUrl: './show-ads.component.html',
  styleUrls: ['./show-ads.component.scss']
})
export class ShowAdsComponent implements OnInit {

  sendId = '';
  adsInfo: [];
  userLoginId=this.authSerice.userData.id;

  constructor(
    private activatedRoute: ActivatedRoute,
    private adsService: AdsService,
    private authSerice:AuthUserService
  ) { }

  ngOnInit() {
    this.sendId = this.activatedRoute.snapshot.paramMap.get('id');
    this.adsService.getAds(this.sendId).subscribe(
      data => {
        this.adsInfo=data;
        console.log(this.adsInfo);
      });
  }

}
