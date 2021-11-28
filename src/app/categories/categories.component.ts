import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {data} from '../model/data';
import{category} from '../model/data'
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { BikedataService } from '../services/bikedata.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit,AfterViewInit {


  // bike:data=new data();
  categoryData:category[]=[];

  dataSource:any;
  // categoryList:any;
  displayCategory=['Category','Select']
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private bikeData:BikedataService,private router:Router) { }

  ngOnInit(): void {
    // this.categoryData=this.bike.CategoryList;
     this.dataSource = new MatTableDataSource<category>(this.bikeData.categoryList);
    console.log('data source');
    console.log(this.dataSource);

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  productRdirect(element)
  {
    console.log(element)
    this.router.navigate(['/product/'+element.category]);
  }



}
