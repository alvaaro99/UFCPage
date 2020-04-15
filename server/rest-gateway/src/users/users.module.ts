import {
  Module,
  HttpModule,
  NestModule,
  MiddlewareConsumer,
} from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { AuthService } from 'src/services/auth/auth.service';
import { GetDecodedTokenMiddleware } from 'src/middlewares/get-decoded-token.middleware';
import { CryptoService } from 'src/services/crypto/crypto.service';

@Module({
  imports: [HttpModule],
  controllers: [UsersController],
  providers: [UsersService, AuthService, CryptoService],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(GetDecodedTokenMiddleware).forRoutes('users/me');
  }
}
