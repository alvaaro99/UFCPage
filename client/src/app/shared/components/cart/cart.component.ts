import { Component } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { environment } from 'src/environments/environment';
import {
  faShoppingCart,
  faTimesCircle,
  faMinusCircle,
  faPlusCircle,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  imageServerURL: string;
  iconCart: IconDefinition;
  iconRemove: IconDefinition;
  iconMinus: IconDefinition;
  IconPlus: IconDefinition;
  constructor(public cartService: CartService) {
    this.iconCart = faShoppingCart;
    this.iconRemove = faTimesCircle;
    this.iconMinus = faMinusCircle;
    this.IconPlus = faPlusCircle;
    this.imageServerURL = environment.PRODUCT_URL;
  }
}
