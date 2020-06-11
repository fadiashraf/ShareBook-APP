import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { RatingModule } from 'ngx-bootstrap/rating';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination';


// import {MatInputModule} from '@angular/material/input';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NewAdsBookComponent } from './components/allComponents/home/new-ads-book/new-ads-book.component';
import { PickedAutherComponent } from './components/allComponents/home/picked-auther/picked-auther.component';
import { FirstStatisticalComponent } from './components/allComponents/home/first-statistical/first-statistical.component';
import { HomeComponent } from './components/allComponents/home/home/home.component';
import { FooterComponent } from './components/layoutComponents/footer/footer.component';
import { AdsBookComponent } from './components/allComponents/ads-book/ads-book/ads-book.component';
import { PageNotFoundComponent } from './components/allComponents/page-not-found/page-not-found.component';
import { AsideAdsComponent } from './components/allComponents/ads-book/aside-ads/aside-ads.component';
import { ChildAdsComponent } from './components/allComponents/ads-book/child-ads/child-ads.component';
import { BookInfoComponent } from './components/allComponents/book-information/book-info/book-info.component';
import { CommentOnBookComponent } from './components/allComponents/book-information/comment-on-book/comment-on-book.component';
import { AdsBookModule } from './components/allComponents/ads-book/ads-book.module';
import { AdsBookRoutingModule } from './components/allComponents/ads-book/ads-book-routing.module';
import { SecondStatisticalComponent } from './components/allComponents/home/second-statistical/second-statistical.component';
import { AuthersComponent } from './components/allComponents/home/author/authers.component';
import { CarouseComponent } from './components/allComponents/home/carouse/carouse.component';
import { BestsellingBooksComponent } from './components/allComponents/home/bestselling-books/bestselling-books.component';
import { LastThreeAdsComponent } from './viewModel/last-three-ads/last-three-ads.component';
import { BookInformationModule } from './components/allComponents/book-information/book-information.module';
import { LoginComponent } from './components/allComponents/login/login.component';
import { NavComponent } from './components/layoutComponents/nav/nav.component';
import { InsertAdsComponent } from './components/allComponents/ads-book/insert-ads/insert-ads.component';
import { RegisterComponent } from './components/allComponents/register/register.component';
import { ReqBookComponent } from './components/allComponents/request-book/req-book/req-book.component';
import { AsideReqComponent } from './components/allComponents/request-book/aside-req/aside-req.component';
import { ChildReqComponent } from './components/allComponents/request-book/child-req/child-req.component';
import { RequestBookModule } from './components/allComponents/request-book/request-book.module';
import { CommentOnUserComponent } from './components/allComponents/user-information/comment-on-user/comment-on-user.component';
import { UserInfoComponent } from './components/allComponents/user-information/user-info/user-info.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InboxComponent } from './components/allComponents/inbox/inbox/inbox.component';
import { ChatComponent } from './components/allComponents/inbox/chat/chat.component';
import { UserService } from './Services/User/user.service';
import { InboxModule } from './components/allComponents/inbox/inbox.module';
import { LoginGaurdService } from './Services/loginGaurd/login-gaurd.service';
import { RegisterGaurdService } from './Services/registerGaurd/register-gaurd.service';

@NgModule({
  declarations: [
    AppComponent,
    NewAdsBookComponent,
    PickedAutherComponent,
    FirstStatisticalComponent,
    HomeComponent,
    FooterComponent,
    // AdsBookComponent,
    PageNotFoundComponent,
    // AsideAdsComponent,
    // ChildAdsComponent,
    // BookInfoComponent,
    // CommentOnBookComponent,
    SecondStatisticalComponent,
    AuthersComponent,
    CarouseComponent,
    BestsellingBooksComponent,
    LastThreeAdsComponent,
    LoginComponent,
    RegisterComponent,
    NavComponent ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    AdsBookModule,
    InboxModule,
    BookInformationModule,
    AdsBookRoutingModule,
    CarouselModule.forRoot(),
    BrowserModule,
    AppRoutingModule,RatingModule.forRoot(),
    FormsModule,
    NgxPaginationModule,
    NgbModule
    
    // BrowserAnimationsModule,MatAutocompleteModule,MatInputModule,HttpClientModule
    ],
  providers: [UserService,LoginGaurdService,RegisterGaurdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
