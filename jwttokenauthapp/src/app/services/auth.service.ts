import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BaseRouteReuseStrategy } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // _http:HttpClient;

  // constructor(private _httpSERV:HttpClient) {
  // this._http=_httpSERV;
  //  }
   
  _http=inject(HttpClient);  //short hand of above code
  isUserLoggedIn:boolean = false;
  private hasToken:boolean=false;

  login(email:string, password:string):any{
    return this._http.post<any>('https://freeapi.miniprojectideas.com/api/User/Login', {email,password});
  }

  setToken(token:string){
    localStorage.setItem('jwttoken',token);
  }

  getToken():string|null{
    return localStorage.getItem('jwttoken');
  }

  removeToken():void{
    localStorage.removeItem('jwttoken');
  }

  createAuthHeader()
  {
    const token = this.getToken();
    return new HttpHeaders({
      'Authorization' : token?token:''
    });
  }
}
