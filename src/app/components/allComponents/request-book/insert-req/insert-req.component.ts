import { Component, OnInit } from '@angular/core';
import { AdsService } from 'src/app/Services/Ads/ads.service';
import { RequestService } from 'src/app/Services/Request/request.service';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert-req',
  templateUrl: './insert-req.component.html',
  styleUrls: ['./insert-req.component.scss']
})
export class InsertReqComponent implements OnInit {

  fileToUpload: File = null;
  img:any;
  added:boolean=false;
  constructor(private reqService:RequestService, private router:Router) { }

  ngOnInit() {
  }

 
  imgInput(event) {
    this.fileToUpload = event.target.files[0]
     const formData=new FormData;
     formData.append('img',this.fileToUpload,this.fileToUpload.name);
     this.reqService.uploadImg(formData).subscribe(result=>{
        this.img = result.img 
     console.log( result);
     
     })
  }

  onSubmit(insertFormObject:NgForm)
  { 
    // const img= new FormData();
    // img.append('img',this.fileToUpload,this.fileToUpload.name);

    const title=insertFormObject.value.title;
    const askType=insertFormObject.value.askType;
    const authorName=insertFormObject.value.authorName;
    const CategoryId=insertFormObject.value.CategoryId;
    const City=insertFormObject.value.City;
    const description=insertFormObject.value.description;
    const ISBN=insertFormObject.value.ISBN;
    const img=this.img;
    


    this.reqService.insertReq(
      title,
    askType,
    authorName,
    CategoryId,
    City,
    img,
    description,
    ISBN,).subscribe(
      (data)=>{
        console.log("done");
        this.added=true;
    setTimeout(()=>{
      this.router.navigate(['/home'])
    },3000)
      });

  }

}
