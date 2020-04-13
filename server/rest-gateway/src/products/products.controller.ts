import { Controller, Get, HttpStatus, Res, Param } from '@nestjs/common';
import { Response } from 'express';
import { ProductsService } from './products.service';
import { IProduct } from './product.model';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}
  @Get()
  getAll(@Res() res: Response) {
    const products$ = this.productsService.getAll();

    products$.subscribe(
      (products: IProduct[]) => res.status(HttpStatus.OK).send(products),
      err => res.status(err.status).send(err.data),
    );
  }

  @Get(':id')
  getById(@Param('id') id: number, @Res() res: Response) {
    const product$ = this.productsService.getById(id);

    product$.subscribe(
      (product: IProduct) => res.status(HttpStatus.OK).send(product),
      err => res.status(err.status).send(err.data),
    );
  }
}
