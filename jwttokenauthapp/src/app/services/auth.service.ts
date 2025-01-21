import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

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
  login(email:string, password:string):any{
    return this._http.post('https://freeapi.miniprojectideas.com/api/User/Login', {email,password});
  }
}
