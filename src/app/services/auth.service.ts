import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn:boolean=false

  constructor() { }

  isAuthenticatd()
  {
    return this.loggedIn; 
  }

  login()
  {
    this.loggedIn=true;
  }

  logout()
  {
    this.loggedIn=false;
  }

}
