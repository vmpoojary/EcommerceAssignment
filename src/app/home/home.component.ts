import { Component, OnInit } from '@angular/core';
import {data} from '../model/data';
import { BikedataService } from '../services/bikedata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private bikeData:BikedataService) { }

  featuresList:any;productList:any;

  bike:data=new data();
  displayedColumns: string[] = ['id', 'name'];
  displayedProductList: string[] = ['id', 'name','Category'];
  ngOnInit(): void {
    debugger;

      console.log(this.bikeData.productList);
      this.featuresList=this.bikeData.featureList
      this.productList=this.bikeData.productList;

  }


}


