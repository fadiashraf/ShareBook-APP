import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/Services/Request/request.service';
import { ActivatedRoute } from '@angular/router';
import { AuthUserService } from 'src/app/Services/userAuth/auth-user.service';

@Component({
  selector: 'app-req-information',
  templateUrl: './req-information.component.html',
  styleUrls: ['./req-information.component.scss']
})
export class ReqInformationComponent implements OnInit {

  sendId = '';
  reqInfo: any;
  userLoginId=this.authSerice.userData.id;

  
  constructor(
    private activatedRoute: ActivatedRoute,
    private reqService: RequestService,
    private authSerice:AuthUserService
  ) { }

  ngOnInit() {
    this.sendId = this.activatedRoute.snapshot.paramMap.get('id');
    this.reqService.getReqInfo(this.sendId).subscribe(
      data=>{
        this.reqInfo=data;
        console.log(data)
      }
    );
    
    

  }

}
