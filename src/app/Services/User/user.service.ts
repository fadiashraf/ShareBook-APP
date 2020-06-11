import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Socket } from 'ngx-socket-io';
import { AuthUserService } from '../userAuth/auth-user.service';
import { CanLoad, CanActivate, Route, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService implements CanLoad {
 
  isAuth=this.authService.isAuthUser;

  private httpOptions:any;
  
  constructor(
    private http:HttpClient,
    private authService:AuthUserService,
    private socket: Socket,
    private router:Router
    ) { 
      if (localStorage.getItem("userData") == null) {
        this.httpOptions={
          headers:new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept':'*/*'
          })
        };
        console.log("not auth http");
      }
      else{
        this.httpOptions={
          headers:new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept':'*/*',
            'Authorization':`Bearer ${this.authService.userData.token}`
          })
        };
        console.log("auth http");
  
    }
  }

  canLoad(route: Route): boolean {
    let url: string = route.path;
    console.log('Url:'+ url);
    console.log(url=='register');
    
      if (localStorage.getItem("userData") == null) {
        // this.authService.setRedirectUrl(url);
        this.router.navigate([ '/home' ]);
        return false;
        
      }
      
      return true; 
    
    		
  }

  // canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  //   if (localStorage.getItem("userData") === null) {
  //       return true;
  //   }

  //   // navigate to login page
  //   // this.router.navigate(['/home']);
  //   // you can save redirect url so after authing we can move them back to the page they requested
  //   return false;
  // }

  // Get Number Of All Users
  getNumOfUser():Observable<any>
  {
  return this.http.get<any>(`${environment.apiUrl}/numberOfUsers`);
  }

  

  // Get popular users ( with most ads )
  getPopularUser():Observable<any>
  {
  return this.http.get<any>(`${environment.apiUrl}/popluarUsers`);
  }

   // Get popular users ( with most req )
   getPopularUserReq():Observable<any>
   {
   return this.http.get<any>(`${environment.apiUrl}/asks/popluarUsers`);
   }



   // Get User Info
  getUserInfo(userId):Observable<any>
  {
  return this.http.get<any>(`${environment.apiUrl}/users/getOneUser/${userId}`);
  }

  // Post Comment On User
  postComment(comment,avgRating,sellerId):Observable<any>
  {
  return this.http.post<any>(`${environment.apiUrl}/users/comment`,{
    comment,avgRating,sellerId},this.httpOptions);
  }

  getCommentsBySocket():Observable<any>
  {
    return this.socket
        .fromEvent("UserOldComments");
  }
    
  
  sendUserIdSocketForOldComments(sellerId){
    this.socket.emit('UserOldComments', sellerId);
  }

  getNewCommentsBySocket():Observable<any>
  {
    return this.socket
        .fromEvent("UserNewComment");
  }
    
  
  sendUserIdSocketForNewComments(sellerId){
    this.socket.emit('UserNewComment', sellerId);
  }


 // Send Msg
 sendMsg(receiverId,message):Observable<any>
 {
 return this.http.post<any>(`${environment.apiUrl}/users/addNewMessage`,{
   receiverId,message},this.httpOptions);
 }


  getInboxBySocket():Observable<any>
  {
    return this.socket
        .fromEvent("AllInbox");
  }
    
  
  sendUserIdSocketForInbox(userId){
    this.socket.emit('AllInbox', userId);
  }

  getSpecificInboxBySocket():Observable<any>
  {
    return this.socket
        .fromEvent("SpecificInbox");
  }
    
  
  sendUserIdSocketForSpecificInbox(userId,user2Id){
    this.socket.emit('SpecificInbox', userId,user2Id);
  }


 
  
  userLogOut():Observable<any>
  {
    return this.http.post<any>(`${environment.apiUrl}/users/logout`,
    this.httpOptions);
  }
  
}
