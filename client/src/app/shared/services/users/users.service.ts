import { Injectable } from '@angular/core';
import { ILoginUser, IUser } from '../../models/user.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  isLoggued: boolean;
  constructor(private http: HttpClient) {}

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
