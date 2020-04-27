import { Injectable, HttpService } from '@nestjs/common';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { IUserDto } from './user.model';

@Injectable()
export class UsersService {
  constructor(private httpClient: HttpService) {}

  getById = (id: number) =>
    this.httpClient.get(`${process.env.USERS_ID_URL}/${id}`).pipe(
      map(response => response.data),
      catchError(error =>
        !error.response
          ? throwError(
              throwError({
                status: 404,
                data: { message: 'url no encontrada' },
              }),
            )
          : throwError(error.response),
      ),
    );

  getByUsername = (username: string) =>
    this.httpClient.get(`${process.env.USERS_NAME_URL}/${username}`).pipe(
      map(response => response.data),
      catchError(error =>
        !error.response
          ? throwError({
              status: 404,
              data: { message: 'url no encontrada' },
            })
          : throwError(error.response),
      ),
    );

  register = (user: IUserDto) =>
    this.httpClient.post(process.env.USERS_URL, user).pipe(
      map(response => response.data),
      catchError(error =>
        !error.response
          ? throwError(
              throwError({
                status: 404,
                data: { message: 'url no encontrada' },
              }),
            )
          : throwError(error.response),
      ),
    );
}
