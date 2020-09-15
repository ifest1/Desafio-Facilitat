import { Component, OnInit } from '@angular/core';
import { UserService } from '../../controllers/user.service'

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

  async doRegister() {
    var result = await this.userService.registerUser({
      name: this.name,
      email: this.email,
      phone: this.phone,
      password: this.password,
      password_confirmation: this.confirmPassword
    })
    console.log(result);
  }
}
