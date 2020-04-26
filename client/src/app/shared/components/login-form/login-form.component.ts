import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  userData: FormGroup;
  constructor(private userService: UsersService) {
    this.userData = new FormGroup({
      username: new FormControl(
        '',
        Validators.compose([Validators.minLength(5), Validators.required])
      ),
      password: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {}

  login() {
    console.log(this.userData);
  }
}
