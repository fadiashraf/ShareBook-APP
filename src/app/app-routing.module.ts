import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/allComponents/home/home/home.component';
import { AdsBookComponent } from './components/allComponents/ads-book/ads-book/ads-book.component';
import { PageNotFoundComponent } from './components/allComponents/page-not-found/page-not-found.component';
import { BookInfoComponent } from './components/allComponents/book-information/book-info/book-info.component';
import { LoginComponent } from './components/allComponents/login/login.component';
import { InsertAdsComponent } from './components/allComponents/ads-book/insert-ads/insert-ads.component';
import { RegisterComponent } from './components/allComponents/register/register.component';
import { InboxComponent } from './components/allComponents/inbox/inbox/inbox.component';
import { ChatComponent } from './components/allComponents/inbox/chat/chat.component';
import { UserService } from './Services/User/user.service';
import { LoginGaurdService } from './Services/loginGaurd/login-gaurd.service';
import { RegisterGaurdService } from './Services/registerGaurd/register-gaurd.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  
  {path: 'login', component: LoginComponent,canActivate: [LoginGaurdService]},
  // {path: 'inbox', component: InboxComponent},
  // {path: 'chat', component: ChatComponent},
{path: 'register', component: RegisterComponent,canActivate: [RegisterGaurdService]},
  // {path: 'insertAds', component: InsertAdsComponent},

  // { path: 'all-ads-book', component: AdsBookComponent },
  {
    path: 'inbox', canLoad: [UserService],
    loadChildren: () => import('./components/allComponents/inbox/inbox.module')
    .then(mod => mod.InboxModule)
  },
  {
    path: 'ads-book', canLoad: [UserService],
    loadChildren: () => import('./components/allComponents/ads-book/ads-book.module')
    .then(mod => mod.AdsBookModule)
  },
  {
    path: 'req-book',canLoad: [UserService],
    loadChildren: () => import('./components/allComponents/request-book/request-book.module')
    .then(mod => mod.RequestBookModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./components/allComponents/user-information/user-information.module')
    .then(mod => mod.UserInformationModule)
  },
  { path: 'book',
  loadChildren: () => import('./components/allComponents/book-information/book-information.module')
  .then(mod => mod.BookInformationModule) } ,
  { path: '',redirectTo: 'home',pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
