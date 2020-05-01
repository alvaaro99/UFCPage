import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/shared/services/localstorage/local-storage.service';
import { UsersService } from 'src/app/shared/services/users/users.service';
import { map, catchError } from 'rxjs/operators';
import { IUser } from 'src/app/shared/models/user.model';
import { throwError } from 'rxjs';
import { CustomException } from 'src/app/shared/exceptions/custom.exception';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  public me: IUser;
  constructor(
    private userService: UsersService,
    private storageService: LocalStorageService,
    private router: Router
  ) {
    this.userService
      .info(this.storageService.getToken())
      .pipe(
        map((user: IUser) => (this.me = user)),
        catchError((error) => {
          this.logout();
          return throwError(error);
        })
      )
      .subscribe({ error: (error) => new CustomException(error.error) });
  }

  ngOnInit(): void {}

  logout() {
    this.userService.logout();
    this.router.navigate(['/login'], { queryParams: { returnUrl: '/me' } });
  }
}
