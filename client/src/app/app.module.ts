import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginModule } from './views/login/login.module';
import { RankingModule } from './views/ranking/ranking.module';
import { ShopModule } from './views/shop/shop.module';
import { SimulatorModule } from './views/simulator/simulator.module';
import { UserModule } from './views/user/user.module';
import { CustomPipesModule } from './shared/pipes/custom-pipes.module';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CustomPipesModule,
    LoginModule,
    RankingModule,
    ShopModule,
    SimulatorModule,
    UserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
