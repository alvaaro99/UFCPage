import { Injectable, NestMiddleware, HttpStatus } from '@nestjs/common';
import { AuthService } from 'src/services/auth/auth.service';
import { Request, Response } from 'express';
import { map } from 'rxjs/operators';

@Injectable()
export class GetDecodedTokenMiddleware implements NestMiddleware {
  constructor(private authService: AuthService) {}
  use(req: Request, res: Response, next: () => void) {
    if (!req.headers.authorization)
      return res.status(HttpStatus.FORBIDDEN).send('Usuario no logueado');
    this.authService
      .getDecodedToken(req.headers.authorization)
      .pipe(map(token => (req.headers.authorization = token)))
      .subscribe(
        () => next(),
        error => res.status(error.status).send(error.data),
      );
  }
}
