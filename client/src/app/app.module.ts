import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { RankingComponent } from './views/ranking/ranking.component';
import { ShopComponent } from './views/shop/shop.component';
import { SimulatorComponent } from './views/simulator/simulator.component';
import { FormsModule } from '@angular/forms';
import { WeightRankingPipe } from './shared/pipes/weight-ranking/weight-ranking.pipe';
import { FighterCardComponent } from './shared/components/fighter-card/fighter-card.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RankingComponent,
    ShopComponent,
    SimulatorComponent,
    WeightRankingPipe,
    FighterCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
