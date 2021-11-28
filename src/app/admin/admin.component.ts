import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { BikedataService } from '../services/bikedata.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  @ViewChild('featureForm') featureForm:NgForm
  @ViewChild('productForm') productForm:NgForm

  constructor(private bikeData:BikedataService,private auth: AuthService) { }

  featureList:any;

  ngOnInit(): void {
    this.featureList=this.bikeData.featureList;


    console.log(this.bikeData.featureList);
  }


  edit(feature)
  {
    debugger;
    console.log(this.featureForm);
    this.bikeData.featureList[feature.id-1].name=this.featureForm.form.value.featureName;
    alert('FEATURE ALTERED CHECK HOME PAGE');
    this.featureForm.reset();
  }

  addProduct()
  {
    console.log(this.productForm.form.value);
    this.bikeData.productList.push(this.productForm.form.value);
    alert('PRODUCT ADDED CHECK THE PRODUCT LIST IN HOME PAGE OR THE CATEGORY PAGE');
    this.productForm.reset();

  }

  logout()
  {
    this.auth.logout();
  }

}
