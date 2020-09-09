import { Component, OnInit } from '@angular/core';
import { UserService } from '../../controllers/user.service'
//import { UserModel } from '../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../shared.styles.scss']
})
export class RegisterComponent implements OnInit {
  name: string;
  email: string;
  password: string;
  phone: string;
  confirmPassword: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  doRegister() {
    var result = this.userService.registerUser({
      name: this.name,
      email: this.email,
      phone: this.phone,
      password: this.password,
    })
    console.log(result);
  }
}
