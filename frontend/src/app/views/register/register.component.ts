import { Component, OnInit } from '@angular/core';
import { UserService } from '../../controllers/user.service'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../shared.styles.scss', './register.component.scss']
})
export class RegisterComponent implements OnInit {
  userAvatar = '../../../assets/placeholder.png';
  registerForm: FormGroup;
  faCamera = faCamera;

  constructor(private userService: UserService, private router: Router) {
   }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl(null, [Validators.maxLength(30), Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.minLength(8), Validators.required]),
      featured_image: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl(null, [Validators.minLength(8), Validators.required]),
    });  
  }


  doRegister() {
    if (this.registerForm.valid) {
      this.userService.registerUser(this.registerForm.value).subscribe((data: any) => {
        if (data.status == 'created') {
          this.registerForm.reset();
            this.redirectToLogin();
          }
        })
      }
    }

  redirectToLogin() {
    this.router.navigateByUrl('/feed');
  }

  onFileSubmit(event) {
    const reader = new FileReader();
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.userAvatar = reader.result as string;
      };
    }
  }
}
