import {
  Controller,
  Get,
  Post,
  Body,
  Res,
  Req,
  HttpStatus,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { IUser, IUserLogin, IModifyUser } from './user.model';
import { Response, Request } from 'express';
import { map, switchMap, tap } from 'rxjs/operators';
import { AuthService } from 'src/services/auth/auth.service';
import { IAxiosError } from 'src/exceptions/axios.error';
import { CryptoService } from 'src/services/crypto/crypto.service';
import { PasswordError } from 'src/exceptions/password-incorrect.error';
import { throwError } from 'rxjs';

@Controller('users')
export class UsersController {
  constructor(
    private usersService: UsersService,
    private authService: AuthService,
    private cryptoService: CryptoService,
  ) {}

  @Get('/me')
  myInfo(@Req() req: Request, @Res() res: Response) {
    this.usersService
      .getById(+req.headers.authorization['id'])
      .pipe(
        map((user: IUser) => {
          user.password = '';
          return user;
        }),
      )
      .subscribe(
        (user: IUser) => res.status(HttpStatus.OK).send(user),
        (error: IAxiosError) => res.status(error.status).send(error.data),
      );
  }

  @Post('/login')
  login(@Body() user: IUserLogin, @Res() res: Response) {
    this.usersService
      .getByAlias(user.alias)
      .pipe(
        switchMap((userBd: IUser) => {
          userBd.password = this.cryptoService.decrypt(userBd.password);
          if (user.password !== userBd.password)
            return throwError(new PasswordError());
          return this.authService.createToken(userBd);
        }),
      )
      .subscribe(
        (token: string) => res.status(HttpStatus.OK).send(token),
        (error: IAxiosError) => res.status(error.status).send(error.data),
      );
  }

  @Post('/register')
  register(@Body() user: IUser, @Res() res: Response) {
    user.password = this.cryptoService.encrypt(user.password);
    this.usersService
      .register(user)
      .pipe(switchMap((user: IUser) => this.authService.createToken(user)))
      .subscribe(
        (token: string) => res.status(HttpStatus.CREATED).send(token),
        (error: IAxiosError) => res.status(error.status).send(error.data),
      );
  }

  @Put('/modify')
  modify(@Body() userToModify: IModifyUser, @Res() res: Response) {
    this.usersService
      .getByAlias(userToModify.user.alias)
      .pipe(
        switchMap((userBd: IUser) => {
          if (
            userToModify.passwordToCheck !==
            this.cryptoService.decrypt(userBd.password)
          )
            return throwError(new PasswordError());
          userToModify.user.password = this.cryptoService.encrypt(
            userToModify.user.password,
          );
          return this.usersService.modify(userToModify.user);
        }),
        map((user: IUser) => {
          user.password = '';
          return user;
        }),
      )
      .subscribe(
        (userModified: IUser) => res.status(HttpStatus.OK).send(userModified),
        (error: IAxiosError) => res.status(error.status).send(error.data),
      );
  }
}
