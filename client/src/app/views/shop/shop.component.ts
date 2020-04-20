import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/products/products.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  constructor(public productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getAll().subscribe(
      () => console.log('bin'),
      (error) => console.log(error)
    );
  }
}
