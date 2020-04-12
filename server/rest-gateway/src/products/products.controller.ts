import { Controller, Get, HttpStatus, Res, Param } from '@nestjs/common';
import { Response } from 'express';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}
  @Get()
  getAll(@Res() res: Response) {
    const products$ = this.productsService.getAll();

    products$.subscribe(
      products => res.status(HttpStatus.OK).send(products),
      err => res.status(err.response.status).send(err.response.data),
    );
  }

  @Get(':id')
  getById(@Param('id') id: number, @Res() res: Response) {
    const product$ = this.productsService.getById(id);

    product$.subscribe(
      products => res.status(HttpStatus.OK).send(products),
      err => res.status(err.response.status).send(err.response.data),
    );
  }
}
