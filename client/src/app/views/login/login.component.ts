import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/shared/services/localstorage/local-storage.service';
import { UsersService } from 'src/app/shared/services/users/users.service';
import { Location } from '@angular/common';
import { map, tap } from 'rxjs/operators';
import { CustomException } from 'src/app/shared/exceptions/custom.exception';
import { IUser } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  registered: boolean;
  constructor(
    private userService: UsersService,
    private storageService: LocalStorageService,
    private location: Location
  ) {
    this.registered = true;
  }

  ngOnInit(): void {
    !this.storageService.getToken()
      ? (this.userService.isLoggued = false)
      : (this.userService.isLoggued = true);
  }

  login(userData: IUser) {
    this.userService
      .login(userData)
      .pipe(
        map(({ token }: { token: string }) =>
          this.storageService.saveToken(token)
        ),
        tap(() => {
          this.userService.isLoggued = true;
          this.location.back();
        })
      )
      .subscribe({ error: ({ error }) => new CustomException(error) });
  }
}
