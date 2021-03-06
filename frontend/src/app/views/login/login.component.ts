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
      password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
    this.redirectIfLoggedIn();
  }
  
  login() {
    if (this.loginForm.valid) {
    var email = this.loginForm.controls['email'].value
    var password = this.loginForm.controls['password'].value
      this.loginService.login(email, password).subscribe((data) => {
        if ('authentication_token' in data) {
          var { authentication_token } = data;
          this.storeData(authentication_token);
          this.redirectToFeed();
        }
      });
    }
  }
  redirectIfLoggedIn() {
    if (localStorage.getItem('token'))
      this.redirectToFeed();
  }

  storeData(authentication_token) {
    localStorage.setItem("token", "Bearer ".concat(authentication_token));
  }

  redirectToFeed() {
    this.router.navigateByUrl('/feed');
  }
}
