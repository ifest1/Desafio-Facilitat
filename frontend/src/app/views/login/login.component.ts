import { Component, OnInit } from '@angular/core';
import { UserService } from '../../controllers/user.service';
//import { User } from '../models/user'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../shared.styles.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
  }
  
  doLogin() {
    this.userService.getUsers();
    if (!this.email || !this.password) {
      //TODO change input colors
    }
  }
}
