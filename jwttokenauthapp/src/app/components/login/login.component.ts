import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
userName:string='seethal@gmail.com';
password:string='Hello1234567';

authServ:AuthService=inject(AuthService);

initiateLogin(userName:string,password:string){
this.authServ.login(userName,password).subscribe((result:any) => {
console.log(result);
});
}
}
