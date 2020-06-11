import { Component, OnInit } from '@angular/core';
import { category } from 'src/app/Model/category.model';
import { categoryService } from 'src/app/Services/Category/category.service';

@Component({
  selector: 'app-second-statistical',
  templateUrl: './second-statistical.component.html',
  styleUrls: ['./second-statistical.component.scss']
})
export class SecondStatisticalComponent implements OnInit {

  loadedCtigories:category[]=[];
  constructor(private categoryService:categoryService) { }

  ngOnInit() {
    this.categoryService.fetchCatigories().subscribe(catigories=>{
      this.loadedCtigories=catigories;
      console.log(catigories);
    })

  }
}
