import { Component, OnInit } from '@angular/core';
import { AuthUserService } from 'src/app/Services/userAuth/auth-user.service';
import { UserService } from 'src/app/Services/User/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  isAuthUser=false;
  isLoggedIn: Observable<boolean>;
  constructor(
    private userService:UserService,
    private authService:AuthUserService) {
    // if (localStorage.getItem("userData") == null ) {
    //   console.log(localStorage.getItem("userData") );
    //   this.isAuthUser=false;
    // }
    // else{
    //   console.log(localStorage.getItem("userData") );
    //   this.isAuthUser=true;}
    }

  ngOnInit() {

    this.isLoggedIn=this.authService.isLoggedIn;
    console.log(this.authService.isLoggedIn);
    if (localStorage.getItem("userData") != null) {
      let userAuth = localStorage.getItem('userData');
      userAuth = JSON.parse(userAuth);
      if (userAuth) {
        this.isAuthUser = true;
      }
      
    }
    // if (localStorage.getItem("userData") == null || localStorage.getItem("userData") == 'undefined') {
    //   this.isAuthUser=false;
    // }
    // else{ this.isAuthUser=true;}

  }

  logOut()
  {
    // console.log('in log out');
    // this.userService.userLogOut().subscribe(
    //   data=>
    //   {
        localStorage.removeItem('userData');
        console.log('in log out is done');

    //   }
    // );
  }

}
