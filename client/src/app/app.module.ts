import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { RankingComponent } from './views/ranking/ranking.component';
import { ShopComponent } from './views/shop/shop.component';
import { SimulatorComponent } from './views/simulator/simulator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WeightRankingPipe } from './shared/pipes/weight-ranking/weight-ranking.pipe';
import { FighterCardComponent } from './shared/components/fighter-card/fighter-card.component';
import { HttpClientModule } from '@angular/common/http';
import { DateToAgePipe } from './shared/pipes/date-to-age/date-to-age.pipe';
import { ProductCardComponent } from './shared/components/product-card/product-card.component';
import { CartComponent } from './shared/components/cart/cart.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DateRankingPipe } from './shared/pipes/date-ranking/date-ranking.pipe';
import { NoRepeatPipe } from './shared/pipes/no-repeat/no-repeat.pipe';

import { UserComponent } from './views/user/user.component';
import { UserCardComponent } from './shared/components/user-card/user-card.component';
import { SelectFighterComponent } from './shared/components/select-fighter/select-fighter.component';
import { ResultFightComponent } from './shared/components/result-fight/result-fight.component';
import { LoginModule } from './views/login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RankingComponent,
    ShopComponent,
    SimulatorComponent,
    WeightRankingPipe,
    FighterCardComponent,
    DateToAgePipe,
    ProductCardComponent,
    CartComponent,
    DateRankingPipe,
    NoRepeatPipe,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
