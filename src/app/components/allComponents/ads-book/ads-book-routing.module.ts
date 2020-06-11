import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdsBookComponent } from './ads-book/ads-book.component';
import { InsertAdsComponent } from './insert-ads/insert-ads.component';
import { UserService } from 'src/app/Services/User/user.service';
import { ShowAdsComponent } from './show-ads/show-ads.component';

const routes: Routes = [
  {
    path: '',
    component: AdsBookComponent
  },
  {
    path: 'add',
    component: InsertAdsComponent,
    canLoad: [ UserService ]
  }
  ,
  {
    path: ':id',
    component: ShowAdsComponent  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdsBookRoutingModule { }
