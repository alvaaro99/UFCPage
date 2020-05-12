import {
  Module,
  HttpModule,
  NestModule,
  MiddlewareConsumer,
} from '@nestjs/common';
import { SimulatorController } from './simulator.controller';
import { SimulatorService } from './simulator.service';
import { GetDecodedTokenMiddleware } from 'src/middlewares/get-decoded-token.middleware';
import { AuthService } from 'src/services/auth/auth.service';

@Module({
  imports: [HttpModule],
  controllers: [SimulatorController],
  providers: [SimulatorService, AuthService],
})
export class SimulatorModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(GetDecodedTokenMiddleware).forRoutes('simulator/');
  }
}
