import { Injectable } from '@angular/core';
import { IUser, INewUser } from '../../models/user.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  login = (user: IUser) =>
    this.http.post(
      environment.GATEWAY_URL +
        environment.ENDPOINT_USERS +
        environment.ENDPOINT_LOGIN,
      user
    );

  register = (user: INewUser) =>
    this.http.post(
      environment.GATEWAY_URL +
        environment.ENDPOINT_USERS +
        environment.ENDPOINT_REGISTER,
      user
    );

  isLoggued() {}
}
