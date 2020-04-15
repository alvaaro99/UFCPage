import {
  Controller,
  Get,
  Post,
  Body,
  Res,
  Req,
  HttpStatus,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { IUser, IUserDto } from './user.model';
import { Response, Request } from 'express';
import { map, switchMap } from 'rxjs/operators';
import { AuthService } from 'src/services/auth/auth.service';
import { IAxiosError } from 'src/exceptions/axios.error';
import { CryptoService } from 'src/services/crypto/crypto.service';

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
          user.password = this.cryptoService.decrypt(user.password);
          return user;
        }),
      )
      .subscribe(
        (user: IUser) => res.status(HttpStatus.OK).send(user),
        (error: IAxiosError) => res.status(error.status).send(error.data),
      );
  }

  @Post('/login')
  login(@Body() user: IUserDto, @Res() res: Response) {
    this.usersService
      .getByUsername(user.username)
      .pipe(switchMap((user: IUser) => this.authService.createToken(user)))
      .subscribe(
        (token: string) => res.status(HttpStatus.OK).send(token),
        (error: IAxiosError) => res.status(error.status).send(error.data),
      );
  }

  @Post('/register')
  register(@Body() user: IUserDto, @Res() res: Response) {
    user.password = this.cryptoService.encrypt(user.password);
    this.usersService
      .register(user)
      .pipe(switchMap((user: IUser) => this.authService.createToken(user)))
      .subscribe(
        (token: string) => res.status(HttpStatus.CREATED).send(token),
        (error: IAxiosError) => res.status(error.status).send(error.data),
      );
  }
}
