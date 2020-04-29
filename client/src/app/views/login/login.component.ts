import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/shared/services/localstorage/local-storage.service';
import { UsersService } from 'src/app/shared/services/users/users.service';
import { map, tap } from 'rxjs/operators';
import { CustomException } from 'src/app/shared/exceptions/custom.exception';
import { IUser, INewUser } from 'src/app/shared/models/user.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  registered: boolean;
  returnUrl: string;
  constructor(
    private userService: UsersService,
    private storageService: LocalStorageService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.registered = true;
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
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
          this.router.navigateByUrl(this.returnUrl);
        })
      )
      .subscribe({ error: ({ error }) => new CustomException(error) });
  }

  register(userData: INewUser) {
    this.userService
      .register(userData)
      .pipe(
        map(({ token }: { token: string }) =>
          this.storageService.saveToken(token)
        ),
        tap(() => {
          this.userService.isLoggued = true;
          this.router.navigateByUrl(this.returnUrl);
        })
      )
      .subscribe({ error: ({ error }) => new CustomException(error) });
  }
}
