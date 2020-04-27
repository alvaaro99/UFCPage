import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/products/products.service';
import { CartService } from 'src/app/shared/services/cart/cart.service';
import { CustomException } from 'src/app/shared/exceptions/custom.exception';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  constructor(
    public productsService: ProductsService,
    public cartService: CartService
  ) {}

  ngOnInit(): void {
    this.productsService.getAll().subscribe({
      error: (error) => console.log(error),
    });
  }
}
