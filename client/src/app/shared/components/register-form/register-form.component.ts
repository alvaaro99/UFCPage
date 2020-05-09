import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent implements OnInit {
  @Output() onRegister = new EventEmitter<FormGroup>();
  userData: FormGroup;
  constructor() {
    this.userData = new FormGroup({
      alias: new FormControl(
        '',
        Validators.compose([
          Validators.minLength(3),
          Validators.maxLength(255),
          Validators.required,
        ])
      ),
      password: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.minLength(3)])
      ),
      birthdate: new FormControl('', Validators.required),
      name: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.maxLength(100)])
      ),
      surname: new FormControl('', Validators.maxLength(100)),
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.email,
          Validators.maxLength(100),
        ])
      ),
      gender: new FormControl(),
    });
  }
  ngOnInit(): void {}

  registerUser() {
    this.onRegister.emit(this.userData.value);
  }
}
