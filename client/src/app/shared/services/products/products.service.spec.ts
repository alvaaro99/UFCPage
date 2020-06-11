import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';
import { HttpClientModule } from '@angular/common/http';
import { IProduct } from '../../models/product.model';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientModule] });
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  /* it('should be set a global products', () => {
    const products: IProduct[] = [
      {
        id: 1,
        name: 'Probe',
        description: 'Probe',
        image: 'image/probe',
        price: 10,
      },
    ];

    service.getAll();
  });*/
});
