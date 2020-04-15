import { Injectable, HttpService } from '@nestjs/common';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { IUser } from 'src/users/user.model';

@Injectable()
export class AuthService {
  constructor(private httpClient: HttpService) {}

  createToken = ({ id }: IUser) =>
    this.httpClient.post(process.env.AUTH_CREATE_URL, { id }).pipe(
      map(response => response.data),
      catchError(error =>
        !error.response
          ? throwError({ status: 404, data: 'url no encontrada' })
          : throwError(error.response),
      ),
    );

  getDecodedToken = (token: string) =>
    this.httpClient.post(process.env.AUTH_VALIDATE_URL, { token }).pipe(
      map(response => response.data),
      catchError(error =>
        !error.response
          ? throwError({ status: 404, data: 'url no encontrada' })
          : throwError(error.response),
      ),
    );
}
