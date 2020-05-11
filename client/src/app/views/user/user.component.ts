import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users/users.service';
import { catchError, tap } from 'rxjs/operators';
import { IUser, IModifyUser } from 'src/app/shared/models/user.model';
import { throwError } from 'rxjs';
import { CustomException } from 'src/app/shared/exceptions/custom.exception';
import { Router } from '@angular/router';
import { SuccessAlert } from 'src/app/shared/alerts/success.alert';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  public me: IUser;
  constructor(private userService: UsersService, private router: Router) {
    this.userService
      .info()
      .pipe(
        tap((user: IUser) => (this.me = user)),
        catchError((error) => {
          this.logout();
          return throwError(error);
        })
      )
      .subscribe({ error: (error) => new CustomException(error.error) });
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/login'], { queryParams: { returnUrl: '/me' } });
  }

  modify(modifyUser: IModifyUser) {
    this.userService
      .modify(modifyUser)
      .pipe(
        tap((user: IUser) => {
          new SuccessAlert('Usuario Modificado');
          this.me = user;
        })
      )
      .subscribe({ error: (error) => new CustomException(error.error) });
  }
}
