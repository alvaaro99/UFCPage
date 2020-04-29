import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/shared/services/localstorage/local-storage.service';
import { UsersService } from 'src/app/shared/services/users/users.service';
import { map } from 'rxjs/operators';
import { IUser } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  public me: IUser;
  constructor(
    private userService: UsersService,
    private storageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.userService
      .info(this.storageService.getToken())
      .pipe(map((user: IUser) => (this.me = user)))
      .subscribe();
  }

  logout() {
    this.storageService.removeToken();
    window.location.reload();
  }
}
