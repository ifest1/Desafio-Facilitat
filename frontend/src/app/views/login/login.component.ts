import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../controllers/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../shared.styles.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    });
    this.redirectIfLoggedIn();
  }
  
  doLogin() {
    var email = this.loginForm.controls['email'].value
    var password = this.loginForm.controls['password'].value
    this.loginService.login(email, password).subscribe((data) => {
      
      if ('authentication_token' in data) {
        var { authentication_token, name } = data;
        this.storeData(name, authentication_token);
        this.redirectToFeed();
      }
      else {
        //Caso o usuário tenha digitado as credenciais erradas.
        return;
      }
    });
  }
  redirectIfLoggedIn() {
    if (localStorage.getItem('token'))
      this.redirectToFeed();
  }

  storeData(name, authentication_token) {
    localStorage.setItem("token", authentication_token);
  }

  redirectToFeed() {
    this.router.navigateByUrl('/feed');
  }
}
