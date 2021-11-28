import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth:AuthService,private router:Router,) { }

  canActivate(   route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean
  {

    console.log('called' +this.auth.loggedIn);
    if(!this.auth.loggedIn)
    {
      this.router.navigate(['/login'])
    }
    return this.auth.loggedIn;
  }
}
