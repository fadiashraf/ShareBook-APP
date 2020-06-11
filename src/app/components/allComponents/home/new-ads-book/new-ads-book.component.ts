import { Component, OnInit } from '@angular/core';
import { AdsService } from 'src/app/Services/Ads/ads.service';

@Component({
  selector: 'app-new-ads-book',
  templateUrl: './new-ads-book.component.html',
  styleUrls: ['./new-ads-book.component.scss']
})
export class NewAdsBookComponent implements OnInit {

  lastAds:[];
  constructor(private adsService:AdsService) { }

  ngOnInit() { 
    this.adsService.getLastAds().subscribe(
      data=>{
        this.lastAds=data;
      }
    );
  }

}
