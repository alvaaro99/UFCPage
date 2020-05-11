import { Injectable, HttpService } from '@nestjs/common';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { IUser } from './user.model';
import { NotFoundError } from 'src/exceptions/not-found-page.error';

@Injectable()
export class UsersService {
  constructor(private httpClient: HttpService) {}

  getById = (id: number) =>
    this.httpClient.get(`${process.env.USERS_ID_URL}/${id}`).pipe(
      map(response => response.data),
      catchError(error =>
        !error.response
          ? throwError(new NotFoundError())
          : throwError(error.response),
      ),
    );

  getByAlias = (alias: string) =>
    this.httpClient.get(`${process.env.USERS_NAME_URL}/${alias}`).pipe(
      map(response => response.data),
      catchError(error =>
        !error.response
          ? throwError(new NotFoundError())
          : throwError(error.response),
      ),
    );

  register = (user: IUser) =>
    this.httpClient.post(process.env.USERS_URL, user).pipe(
      map(response => response.data),
      catchError(error =>
        !error.response
          ? throwError(new NotFoundError())
          : throwError(error.response),
      ),
    );

  modify = (user: IUser) =>
    this.httpClient.put(process.env.USERS_URL, user).pipe(
      map(response => response.data),
      catchError(error =>
        !error.response
          ? throwError(new NotFoundError())
          : throwError(error.response),
      ),
    );
}
