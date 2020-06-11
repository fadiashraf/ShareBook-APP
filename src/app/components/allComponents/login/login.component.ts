import { Component, OnInit } from '@angular/core';
import { AuthUserService } from 'src/app/Services/userAuth/auth-user.service';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit,CanActivate {
  
  backerror=false
  constructor(
    private authservice:AuthUserService,
    private router:Router) { }
  onSubmit(formObject:NgForm)
  {
    const email=formObject.value.email;
    const password=formObject.value.password;

    this.authservice.userLogin(email,password).subscribe(
      data=>{
        console.log(data);
        this.backerror=false;

      },
      (error)=>{this.backerror=true;}
    
    );
    
  }
  ngOnInit() {
    this.backerror=false;
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authservice.isAuthUser) {
        return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }

}
