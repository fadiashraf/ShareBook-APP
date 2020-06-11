import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthUserService } from '../userAuth/auth-user.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private httpOptions:any;
  
  constructor(
    private http:HttpClient,
    private authService:AuthUserService) { 
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

  // Get Number Of All Ads
  // getNumOfAds():Observable<any>
  // {
  // return this.http.get<any>(`${environment.apiUrl}/numberOfAds`);
  // }

  //----------- most viewed request ---------------//
  getMostPopularReq():Observable<any>
  {
  return this.http.get<any>(`${environment.apiUrl}/mostViewedAskfor`);
  }

  // Get Request Info
  getReqInfo(reqId):Observable<any>
  {
  return this.http.get<any>(`${environment.apiUrl}/Askfor/${reqId}`);
  }
  uploadImg(formData):Observable<any>
  {
  return this.http.post<any>(`${environment.apiUrl}/Askfor/add/upload`,formData);
  }
  

  // Get Last Six Request
  getLastReq():Observable<any>
  {
  return this.http.get<any>(`${environment.apiUrl}/lastAsks`);
  }

  // // All Ads
  // getAllAds():Observable<any>
  // {
  // return this.http.get<any>(`${environment.apiUrl}/ads`);
  // }

  // All Ads take and skip
  getLimitReq(limit?:number,skip?:number):Observable<any>
  {
  return this.http.get<any>(`${environment.apiUrl}/Askfor?limit=${limit}&skip=${skip}`);
  }
  
  insertReq(
    title,
    askType,
    authorName,
    CategoryId,
    City,
    img,
    description,
    ISBN,
    )
  {
    return this.http.post<any>(`${environment.apiUrl}/Askfor/add`,{
      title,
      askType,
    authorName,
    CategoryId,
    City,
    img,
    description,
    ISBN,
    },this.httpOptions);
  }
  
}
