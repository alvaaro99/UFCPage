import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { RankingComponent } from './views/ranking/ranking.component';
import { ShopComponent } from './views/shop/shop.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, RankingComponent, ShopComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
