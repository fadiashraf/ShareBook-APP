import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterGaurdService implements CanActivate {

  constructor(private router:Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (localStorage.getItem("userData") != null) {
      // navigate to login page
      this.router.navigate(['/home']);
      // you can save redirect url so after authing we can move them back to the page they requested
      return false;
    }
    return true;
    
  }

}

