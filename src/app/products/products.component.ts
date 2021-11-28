import { Component, OnInit } from '@angular/core';
import{data} from '../model/data'
import{product} from '../model/data'
import {animate, state, style, transition, trigger} from '@angular/animations';
import { BikedataService } from '../services/bikedata.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class ProductsComponent implements OnInit {
  dataSource:any;
  columnsToDisplay = ['id', 'name', 'Category'];
  expandedElement: PeriodicElement | null;
  productList:product[];

  constructor(private bikeData:BikedataService,private route:ActivatedRoute) { }


  ngOnInit(): void {
    debugger;
    console.log(this.route.snapshot.params['category'])
    this.dataSource=this.bikeData.productList.filter(obj=>
      this.route.snapshot.params['category'].includes(obj.Category));
  }

}


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  description: string;
}





