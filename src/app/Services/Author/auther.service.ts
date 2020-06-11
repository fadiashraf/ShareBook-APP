import{Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{map}from 'rxjs/operators';
import { auther } from 'src/app/Model/auther.model';

@Injectable({providedIn: 'root'})
export class autherService
{
    loadedAuthers:auther[]=[];
    constructor(private http:HttpClient)
    {

    }
    fetchAuthers()
    {
       return  this.http.get<auther>('http://localhost:3000/popularAuthors')
    .pipe(map(responseData=>{
       const authersArray:auther[]=[];
       for(const key in responseData )
       {
        authersArray.push(responseData[key]) ;
        
       }

  return authersArray;
  }
    ))
    
 


}
}