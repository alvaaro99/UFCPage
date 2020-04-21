import { Injectable } from '@angular/core';
import { IProduct } from '../../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: IProduct[] = [];

  constructor() {}

  addToCart = (product: IProduct) => {
    this.isProductInCart(product)
      ? this.addQuantity(product)
      : this.firstQuantity(product);

    console.log(this.cart);
  };

  isProductInCart = (product: IProduct) => this.cart.includes(product);

  addQuantity(product: IProduct) {
    product.quantity++;
  }

  firstQuantity(product: IProduct) {
    product.quantity = 1;
    this.cart.push(product);
  }
}
