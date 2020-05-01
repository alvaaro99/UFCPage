import { Injectable } from '@angular/core';
import { ILoginUser, IUser } from '../../models/user.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from '../localstorage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  isLoggued: boolean;
  constructor(
    private http: HttpClient,
    private storageService: LocalStorageService
  ) {
    !this.storageService.getToken()
      ? (this.isLoggued = false)
      : (this.isLoggued = true);
  }

  logout = () => {
    this.isLoggued = false;
    this.storageService.removeToken();
  };

  login = (user: ILoginUser) =>
    this.http.post(
      environment.GATEWAY_URL +
        environment.ENDPOINT_USERS +
        environment.ENDPOINT_LOGIN,
      user
    );

  register = (user: IUser) =>
    this.http.post(
      environment.GATEWAY_URL +
        environment.ENDPOINT_USERS +
        environment.ENDPOINT_REGISTER,
      user
    );

  info = (token: string) =>
    this.http.get(
      environment.GATEWAY_URL +
        environment.ENDPOINT_USERS +
        environment.ENDPOINT_ME,
      { headers: { authorization: token } }
    );
}
