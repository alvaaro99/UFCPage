import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../../services/users/users.service';
import { CustomException } from '../../exceptions/custom.exception';
import { LocalStorageService } from '../../services/localstorage/local-storage.service';
import { map, tap } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  userData: FormGroup;
  constructor(
    private userService: UsersService,
    private storageService: LocalStorageService,
    private location: Location
  ) {
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
    this.userService
      .login(this.userData.value)
      .pipe(
        map(({ token }: { token: string }) =>
          this.storageService.saveToken(token)
        ),
        tap(() => this.location.back())
      )
      .subscribe({ error: ({ error }) => new CustomException(error) });
  }
}
