import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from '../../views/shop/shop.component';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { CartComponent } from '../../shared/components/cart/cart.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [ShopComponent, ProductCardComponent, CartComponent],
  imports: [CommonModule, FontAwesomeModule],
})
export class ShopModule {}
