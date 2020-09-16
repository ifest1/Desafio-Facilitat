import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../controllers/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../shared.styles.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {

  }
  
  doLogin() {
    this.loginService.login(this.email, this.password).subscribe((data) => {
      console.log(data);
      if ('authentication_token' in data) {
        var { authentication_token, name } = data;
        localStorage.setItem("name", name);
        localStorage.setItem("token", authentication_token);
        this.router.navigateByUrl('/feed');
      }
      else {
        //Caso o usuário tenha digitado as credenciais erradas.
        return;
      }
    });
  }
}
