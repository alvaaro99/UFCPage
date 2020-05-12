import { Component, Input } from '@angular/core';
import { IProduct } from '../../models/product.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() product: IProduct;
  @Input() clickFunction: Function;
  imageServerUrl: string;

  constructor() {
    this.imageServerUrl = environment.PRODUCT_URL;
  }

  addToCart() {
    this.clickFunction(this.product);
  }
}
