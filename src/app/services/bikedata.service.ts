import { Injectable } from '@angular/core';
import { MAT_DATE_LOCALE_FACTORY } from '@angular/material/core';
import{data} from '../model/data';

@Injectable({
  providedIn: 'root'
})
export class BikedataService {

  constructor() { }


  data_= new data();
  featureList= this.data_.FeatureLists;
  categoryList=this.data_.CategoryList;
  productList=this.data_.ProductList;



}
