import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthUserService } from 'src/app/Services/userAuth/auth-user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  backerror=false;
  fileToUpload: File = null;
  img:any;
  constructor(private authservice: AuthUserService,private router:Router) { 
    this.backerror=false;
  }


  
  imgInput(event) {
    this.fileToUpload = event.target.files[0]
     const formData=new FormData;
     formData.append('img',this.fileToUpload,this.fileToUpload.name);
     this.authservice.uploadImg(formData).subscribe(result=>{
        this.img = result.img 
     console.log( result);
     
     })
  }

  onSubmit(registerFormObject: NgForm) {

    const firstName = registerFormObject.value.firstName;
    const lastName = registerFormObject.value.lastName;
    const email = registerFormObject.value.email;
    const password = registerFormObject.value.password;
    const phone = registerFormObject.value.phone;
    const GovernorateteId = registerFormObject.value.GovernorateteId;
    const name = firstName + " " + lastName;
    const img = this.img;

    console.log(name+" "+email+" "+password+" "+phone+" ");
    this.authservice.userRegister(name, email, password, phone, GovernorateteId,img).subscribe(
      data => {
        this.authservice.userLogin(email,password).subscribe(
          loginData=>{
            // this.router.navigate(['/']);
            console.log("in login");
            console.log(loginData);
            this.backerror=false;
          },
          (error)=>{this.backerror=true;
          }
        );

      }
    );
  }

  ngOnInit() {
  }

}
