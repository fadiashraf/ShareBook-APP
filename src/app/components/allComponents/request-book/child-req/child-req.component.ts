import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/Services/Request/request.service';
import { AuthUserService } from 'src/app/Services/userAuth/auth-user.service';

@Component({
  selector: 'app-child-req',
  templateUrl: './child-req.component.html',
  styleUrls: ['./child-req.component.scss']
})
export class ChildReqComponent implements OnInit {

  reqList: [];
  limit = 8;
  skip = 0;
  isActiveNext = true;
  isActiveBack = false;
  numOfReq = 0;
  userLoginId=this.authSerice.userData.id;

  constructor(private reqService: RequestService,
    private authSerice:AuthUserService) { }

  ngOnInit() {
    this.reqService.getLimitReq(this.limit, this.skip).subscribe(data => {
      this.reqList = data.AllAsks;
      this.numOfReq = data.askCount;
      console.log(data);
    }
    );
  }

  nextAds() {
    this.skip += this.limit;
    this.limit += 8;
    if (this.limit > this.numOfReq) {
      this.isActiveNext = false;
    }
    this.isActiveBack=true;
    this.reqService.getLimitReq(this.limit, this.skip).subscribe(data => {
      this.reqList = data.AllAsks;
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
    
    this.reqService.getLimitReq(this.limit, this.skip).subscribe(data => {
      this.reqList = data.AllAsks;
    }
    );

  }

}
