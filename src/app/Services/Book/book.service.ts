import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthUserService } from '../userAuth/auth-user.service';
import { Socket } from 'ngx-socket-io';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  
  private httpOptions:any;
  
  constructor(
    private http:HttpClient,
    private authService:AuthUserService,
    private socket: Socket) { 
    if (localStorage.getItem("userData") === null) {
      this.httpOptions={
        headers:new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept':'*/*'
        })
      };
    }
    else{
      this.httpOptions={
        headers:new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept':'*/*',
          'Authorization':`Bearer ${this.authService.userData.token}`
        })
      };

    }
  }
  
  // Get Number Of All Books
  getNumOfBooks():Observable<any>
  {
  return this.http.get<any>(`${environment.apiUrl}/numberOfBooks`);
  }

  // Get Three Popular Book
  getPopularBook():Observable<any>
  {
  return this.http.get<any>(`${environment.apiUrl}/booksWithMostComments`);
  }

  // Get Book Info
  getBookInfo(bookId):Observable<any>
  {
  return this.http.get<any>(`${environment.apiUrl}/book/${bookId}`);
  }

  // Post Comment On Book
  postComment(comment,avgRating,bookId):Observable<any>
  {
  return this.http.post<any>(`${environment.apiUrl}/books/addComment`,{
    comment,avgRating,bookId},this.httpOptions);
  }

  getCommentsBySocket():Observable<any>
  {
    return this.socket
        .fromEvent("oldComments");
  }
    
  
  sendBookIdSocketForOldComments(id){
    this.socket.emit('oldComments', id);
  }

  getNewCommentsBySocket():Observable<any>
  {
    return this.socket
        .fromEvent("newComment");
  }
    
  
  sendBookIdSocketForNewComments(id){
    this.socket.emit('newComment', id);
  }

}
