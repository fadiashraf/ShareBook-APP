import { Component, OnInit } from '@angular/core';
import { AuthUserService } from 'src/app/Services/userAuth/auth-user.service';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  fileToUpload: File = null;
  isAuthUser=false;
  userInfo:[];
  username;
  private splitted;
  constructor(
    private authservice: AuthUserService,
    private userService:UserService) { 
      this.splitted = [];
    }

    ngOnInit() {
      if (localStorage.getItem("userData") != null) {
        let userAuth = localStorage.getItem('userData');
        userAuth = JSON.parse(userAuth);
        if (userAuth) {
          this.isAuthUser = true;
        }
      }

      this.userService.getUserInfo(this.authservice.userData.id).subscribe(
        data=>{
          this.userInfo=data;
          this.username=data.name;
           
          this.splitted = this.username.split(" "); 
          console.log(this.splitted);

        }
      );
    }


    
    onSubmit(editFormObject: NgForm) {

    const firstName = editFormObject.value.firstName;
    const lastName = editFormObject.value.lastName;
    const email = editFormObject.value.email;
    // const password = editFormObject.value.password;
    const phone = editFormObject.value.phone;
    // const GovernorateteId = editFormObject.value.GovernorateteId;
    const name = firstName + " " + lastName;
    // const img = this.fileToUpload.name;

    this.authservice.Edituser(name, email, phone).subscribe((data)=>{
      console.log(data);
    })
  }

  /* imgInput(files: FileList) {
    this.fileToUpload = files.item(0);
    console.log(this.fileToUpload.name);
  }
   */

}
