import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../../services/users/users.service';
import { LocalStorageService } from '../../services/localstorage/local-storage.service';
import { Location } from '@angular/common';
import { map, tap } from 'rxjs/operators';
import { CustomException } from '../../exceptions/custom.exception';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent implements OnInit {
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
      birthdate: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {}

  register() {
    this.userService
      .register(this.userData.value)
      .pipe(
        map(({ token }: { token: string }) =>
          this.storageService.saveToken(token)
        ),
        tap(() => this.location.back())
      )
      .subscribe({ error: ({ error }) => new CustomException(error) });
  }
}
