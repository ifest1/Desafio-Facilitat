import { Component, OnInit } from '@angular/core';
import { UserService } from '../../controllers/user.service'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../shared.styles.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl(null, [Validators.maxLength(30), Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.minLength(8), Validators.required]),
      confirmPassword: new FormControl(null, [Validators.minLength(8), Validators.required]),
    });  
  }

  doRegister() {
    if (this.registerForm.valid) {
      this.userService.registerUser(this.registerForm.value).subscribe((data: any) => {
        if (data.status == 'created') {
          var email = this.registerForm.controls['email'].value;
          var password = this.registerForm.controls['password'].value;
            //this.redirectToLogin(email, password);
            console.log('TO DO');
          }
        })
      }
    }

  redirectToLogin() {
    this.router.navigateByUrl('/feed');
  }
}
