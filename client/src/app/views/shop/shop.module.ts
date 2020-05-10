import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from '../../views/shop/shop.component';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { CartComponent } from '../../shared/components/cart/cart.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShopRoutingModule } from './shop-routing.module';

@NgModule({
  declarations: [ShopComponent, ProductCardComponent, CartComponent],
  imports: [CommonModule, ShopRoutingModule, FontAwesomeModule],
})
export class ShopModule {}
