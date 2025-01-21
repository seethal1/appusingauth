import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
userName:string='seethal@gmail.com';
password:string='Hello1234567';

authServ:AuthService=inject(AuthService);

initiateLogin(formdata:any){
this.authServ.login(formdata.value.userName,formdata.value.password).subscribe((result:any) => {
console.log(result.token);
this.authServ.setToken(result.token);
});
}

userLogout(){
  this.authServ.removeToken();
}
}
