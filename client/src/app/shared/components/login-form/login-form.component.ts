import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponen {
  @Output() onLogin = new EventEmitter<FormGroup>();
  userData: FormGroup;
  constructor() {
    this.userData = new FormGroup({
      alias: new FormControl(
        '',
        Validators.compose([Validators.minLength(3), Validators.required])
      ),
      password: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.minLength(3)])
      ),
    });
  }

  loginUser() {
    this.onLogin.emit(this.userData.value);
  }
}
