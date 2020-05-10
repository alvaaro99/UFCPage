import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

import { ShopComponent } from './views/shop/shop.component';
import { SimulatorComponent } from './views/simulator/simulator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FighterCardComponent } from './shared/components/fighter-card/fighter-card.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductCardComponent } from './shared/components/product-card/product-card.component';
import { CartComponent } from './shared/components/cart/cart.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DateToAgePipe } from './shared/pipes/date-to-age/date-to-age.pipe';

import { UserComponent } from './views/user/user.component';
import { UserCardComponent } from './shared/components/user-card/user-card.component';
import { SelectFighterComponent } from './shared/components/select-fighter/select-fighter.component';
import { ResultFightComponent } from './shared/components/result-fight/result-fight.component';
import { LoginModule } from './views/login/login.module';
import { RankingModule } from './views/ranking/ranking.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShopComponent,
    SimulatorComponent,
    FighterCardComponent,
    DateToAgePipe,
    ProductCardComponent,
    CartComponent,
    UserComponent,
    UserCardComponent,
    SelectFighterComponent,
    ResultFightComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    LoginModule,
    RankingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
