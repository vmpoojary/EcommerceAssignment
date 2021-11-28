import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,private auth: AuthService) { }

 @ViewChild('ngForm') ngForm:NgForm

  ngOnInit(): void {
  }

  login()
  {


    if(this.ngForm.valid)
    {
      if(this.ngForm.form.value.username=='USERNAME' && this.ngForm.form.value.password=='USERNAME@123456')
      {
        //redirect to admin
        this.auth.login();
        this.router.navigate(['/admin'])

      }
      else{
        alert('INVALID CREDENTIALS');
      }
    }
    else
    {
      alert('PLASE ENTER VALID VALUES')
    }
  }

}


