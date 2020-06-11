import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthUserService } from '../userAuth/auth-user.service';

@Injectable({
  providedIn: 'root'
})
export class AdsService {

  private httpOptions:any;
  
  constructor(
    private http:HttpClient,
    private authService:AuthUserService) { 
    if (localStorage.getItem("userData") == null) {
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
  getNumOfAds():Observable<any>
  {
  return this.http.get<any>(`${environment.apiUrl}/numberOfAds`);
  }

  //----------- most viewed ads ---------------//
  getMostPopularAds():Observable<any>
  {
  return this.http.get<any>(`${environment.apiUrl}/mostViewedAds`);
  }


  // Get Last Three Ads
  getLastAds():Observable<any>
  {
  return this.http.get<any>(`${environment.apiUrl}/lastAds`);
  }

  // // All Ads
  // getAllAds():Observable<any>
  // {
  // return this.http.get<any>(`${environment.apiUrl}/ads`);
  // }

  // All Ads take and skip
  getLimitAds(limit?:number,skip?:number):Observable<any>
  {
  return this.http.get<any>(`${environment.apiUrl}/ads?limit=${limit}&skip=${skip}`);
  }
  
  insertAds(
    title,
    price,
    adsType,
    authorName,
    CategoryId,
    City,
    img,
    description,
    ISBN,
    // img?:string
    )
  {
    return this.http.post<any>(`${environment.apiUrl}/ads/add`,{
    title,
    price,
    adsType,
    authorName,
    CategoryId,
    City,
    img,
    description,
    ISBN,
    },this.httpOptions);
  }

  // get Ads By ID
  getAds(adsId):Observable<any>
  {
  return this.http.get<any>(`${environment.apiUrl}/ads/${adsId}`);
  }
   
  uploadImg(formData):Observable<any>
  {
  return this.http.post<any>(`${environment.apiUrl}/ads/add/upload`,formData);
  }
  

}
