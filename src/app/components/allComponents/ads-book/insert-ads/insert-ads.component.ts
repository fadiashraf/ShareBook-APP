import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdsService } from 'src/app/Services/Ads/ads.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert-ads',
  templateUrl: './insert-ads.component.html',
  styleUrls: ['./insert-ads.component.scss']
})
export class InsertAdsComponent implements OnInit {

  fileToUpload: File = null;
  img:any;
  added:boolean=false;
  constructor(
    private adsService:AdsService,
    private http:HttpClient,
    private router:Router) { }
    
  ngOnInit() {
  }



  
  imgInput(event) {
    this.fileToUpload = event.target.files[0]
     const formData=new FormData;
     formData.append('img',this.fileToUpload,this.fileToUpload.name);
     this.adsService.uploadImg(formData).subscribe(result=>{
        this.img = result.img 
     console.log( result);
     
     })
  }

  onSubmit(insertFormObject:NgForm)
  { 
    // const img= new FormData();
    // img.append('img',this.fileToUpload,this.fileToUpload.name);

    const title=insertFormObject.value.title;
    const price=insertFormObject.value.price;
    const adsType=insertFormObject.value.adsType;
    const authorName=insertFormObject.value.authorName;
    const CategoryId=insertFormObject.value.CategoryId;
    const City=insertFormObject.value.City;
    const description=insertFormObject.value.description;
    const ISBN=insertFormObject.value.ISBN;
    const img=this.img;
    
/* console.log("img "+img+ " title :"+ title + " "+ "price :"+price+ " authorName: "+authorName+ " "+
"CategoryId :"+CategoryId+ " city: "+City + " desc :"+description+" ads type"+adsType);
 */

    this.adsService.insertAds(
      title,
    price,
    adsType,
    authorName,
    CategoryId,
    City,
    img,
    description,
    ISBN).subscribe(
      (data)=>{
        console.log("done");
        this.added=true;
    setTimeout(()=>{
      this.router.navigate(['/home'])
    },3000)

      });

  }

  // imgInput(files: FileList) {
  //   this.fileToUpload = files.item(0);
  //   console.log(this.fileToUpload.name);
  // }



  
}
