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
      username: new FormControl(
        '',
        Validators.compose([Validators.minLength(5), Validators.required])
      ),
      password: new FormControl('', Validators.required),
      birthdate: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {}

  registerUser() {
    this.onRegister.emit(this.userData.value);
  }
}
