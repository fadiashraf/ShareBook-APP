import{Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{map}from 'rxjs/operators';
import { category } from 'src/app/Model/category.model';
@Injectable({providedIn: 'root'})
export class categoryService
{
    loadedcategories:category[]=[];
    constructor(private http:HttpClient)
    {

    }
    fetchCatigories()
    {
       return  this.http.get<category>('http://localhost:3000/categoriesWithMostBooks')
    .pipe(map(responseData=>{
       const categoriesArray:category[]=[];
       for(const key in responseData )
       {
        categoriesArray.push(responseData[key]) ;
       }

  return categoriesArray;
  }
    ))}}
    