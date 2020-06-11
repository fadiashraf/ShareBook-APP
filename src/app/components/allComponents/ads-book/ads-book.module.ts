import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';

import { AdsBookRoutingModule } from './ads-book-routing.module';
import { AdsBookComponent } from './ads-book/ads-book.component';
import { AsideAdsComponent } from './aside-ads/aside-ads.component';
import { ChildAdsComponent } from './child-ads/child-ads.component';
import { BookInformationRoutingModule } from '../book-information/book-information-routing.module';
import { BookInfoComponent } from '../book-information/book-info/book-info.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { InsertAdsComponent } from './insert-ads/insert-ads.component';
import { FormsModule } from '@angular/forms';
import { ShowAdsComponent } from './show-ads/show-ads.component';
@NgModule({
  declarations: [
    AdsBookComponent,
    AsideAdsComponent,
    ChildAdsComponent,
    InsertAdsComponent,
    ShowAdsComponent,
    ShowAdsComponent
  ],
  imports: [
    CommonModule,
    AdsBookRoutingModule,
    NgxPaginationModule,
    NgbModule,
    FormsModule,
    NgbPaginationModule, NgbAlertModule

    // BookInformationRoutingModule
  ]
  
})
export class AdsBookModule { }
