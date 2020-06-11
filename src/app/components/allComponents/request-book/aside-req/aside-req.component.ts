import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/User/user.service';
import { RequestService } from 'src/app/Services/Request/request.service';

@Component({
  selector: 'app-aside-req',
  templateUrl: './aside-req.component.html',
  styleUrls: ['./aside-req.component.scss']
})
export class AsideReqComponent implements OnInit {

  popularUsers:[];
  popularReq:[]; 
  constructor(
    private userServices:UserService,
    private reqServices:RequestService) { }

  ngOnInit() {
    this.reqServices.getMostPopularReq().subscribe(
      mostReq=>{
        this.popularReq=mostReq;
      }
    );
    this.userServices.getPopularUserReq().subscribe(
      popularUser=>{
        this.popularUsers=popularUser;
        console.log(this.popularUsers);
      }
      );
  }

}
