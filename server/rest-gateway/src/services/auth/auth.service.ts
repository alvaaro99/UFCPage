import { Injectable, HttpService } from '@nestjs/common';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { IUser } from 'src/users/user.model';
import { NotFoundError } from 'src/exceptions/notFound.error';

@Injectable()
export class AuthService {
  constructor(private httpClient: HttpService) {}

  createToken = ({ id }: IUser) =>
    this.httpClient.post(process.env.AUTH_CREATE_URL, { id }).pipe(
      map(response => response.data),
      catchError(error =>
        !error.response
          ? throwError(new NotFoundError())
          : throwError(error.response),
      ),
    );

  getDecodedToken = (token: string) =>
    this.httpClient.post(process.env.AUTH_VALIDATE_URL, { token }).pipe(
      map(response => response.data),
      catchError(error =>
        !error.response
          ? throwError(new NotFoundError())
          : throwError(error.response),
      ),
    );
}
