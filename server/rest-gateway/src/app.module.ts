import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthService } from './services/auth/auth.service';
import { CryptoService } from './services/crypto/crypto.service';

@Module({
  imports: [
    HttpModule,
    ProductsModule,
    ConfigModule.forRoot({
      envFilePath: './src/environments/.env',
      isGlobal: true,
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService, AuthService, CryptoService],
})
export class AppModule {}
