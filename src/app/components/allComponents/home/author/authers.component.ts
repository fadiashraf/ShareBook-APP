import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{map}from 'rxjs/operators';
  import { from } from 'rxjs';
import { auther } from 'src/app/Model/auther.model';
import { autherService } from 'src/app/Services/Author/auther.service';

@Component({
  selector: 'app-authers',
  templateUrl: './authers.component.html',
  styleUrls: ['./authers.component.scss']
})
export class AuthersComponent implements OnInit {
  loadedAuthers:auther[]=[];
  constructor( private autherService:autherService ) 
  {
 
   }

  ngOnInit() {
   this.autherService.fetchAuthers().subscribe(authers=>{this.loadedAuthers=authers;
    console.log(this.loadedAuthers);
    });
     }

}
