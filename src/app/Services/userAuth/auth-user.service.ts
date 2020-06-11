import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthUser } from 'src/app/Model/auth-user';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthUserService {

  public isAuthUser:boolean;
  public userData:any;
  private httpOptions:any;
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
  constructor(
    private http:HttpClient,
    private router:Router) {

      if (localStorage.getItem("userData") == null) {
        this.isAuthUser=false;
        this.httpOptions={
          headers:new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept':'*/*'
          })
        };
      }
      else{ this.userData = JSON.parse(localStorage.getItem('userData'));
      this.httpOptions={
        headers:new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept':'*/*',
          'Authorization':`Bearer ${this.userData.token}`
        })
      };
        }
       
      
    }

  userRegister(name,email,password,phone,GovernorateteId,img):Observable<any>
  {
    return this.http.post<any>(`${environment.apiUrl}/users/signup`,
    {name,email,password,phone,GovernorateteId,img},this.httpOptions);
    
  }  
  Edituser(name,email,phone):Observable<any>
  {
    return this.http.post<any>(`${environment.apiUrl}/users/edit`,
    {name,email,phone,},this.httpOptions);
    
  }  

  userLogin(email,password):Observable<any>
  {
    return this.http.post<any>(`${environment.apiUrl}/users/login`,
    {email,password},this.httpOptions).pipe(tap(res => {
      const userRes=new AuthUser(
        res.user._id,
        res.user.email,
        res.user.name,
        res.token);
      localStorage.setItem('userData',  JSON.stringify(userRes));
      this.loggedIn.next(true);
      this.router.navigate(['/']);

    }));

     
  }

  uploadImg(formData):Observable<any>
  {
  return this.http.post<any>(`${environment.apiUrl}/user/signup/upload`,formData);
  }

  

  

}
