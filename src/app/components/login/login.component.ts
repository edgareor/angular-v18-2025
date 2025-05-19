import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RecaptchaModule } from "ng-recaptcha-2";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule, ReactiveFormsModule, MatButtonModule, MatCheckboxModule,
    RecaptchaModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private router: Router){}
  form = new FormGroup({
    correo: new FormControl("", Validators.email),
    password: new FormControl("", Validators.minLength(3))
  })

  flag = true;
  changeFlag() {
    this.flag = !this.flag;
  }

  send() {
    console.log(this.form.value);
    this.form.reset();
    this.router.navigate(["table"]);
  }

  captchaValid = false;
  resolved(response: any) {
    this.captchaValid = true;
  }
}
