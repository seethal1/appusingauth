import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate{
_authServ= new AuthService();
isTokenPresent=false;

  constructor() { }

  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
  const isTokenPresent = this._authServ.getToken();
  if(isTokenPresent)
  {
    this.isTokenPresent = true;
    return true;
  }
  else
  {
    this.isTokenPresent = false;
    return false;
  }

  }
}
