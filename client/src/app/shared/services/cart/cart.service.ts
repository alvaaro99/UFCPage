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
  };

  private isProductInCart = (product: IProduct) => this.cart.includes(product);

  private getIndex = (product: IProduct) => this.cart.indexOf(product);

  private addQuantity = (product: IProduct) => {
    product.quantity++;
  };

  private firstQuantity = (product: IProduct) => {
    product.quantity = 1;
    this.cart.push(product);
  };

  removeQuantity = (product: IProduct) => {
    const index = this.getIndex(product);
    this.cart[index].quantity--;
    if (product.quantity === 0) this.removeProduct(product);
  };

  removeProduct = (product: IProduct) => {
    const index = this.getIndex(product);
    this.cart.splice(index, 1);
  };

  calculateTotal = () => {
    const subtotal = this.cart.map(
      (product: IProduct) => product.price * product.quantity
    );
    return subtotal.reduce((acc, curr) => curr + acc);
  };
}
