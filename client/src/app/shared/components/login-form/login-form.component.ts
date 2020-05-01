import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
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

  ngOnInit(): void {}

  loginUser() {
    this.onLogin.emit(this.userData.value);
  }
}
