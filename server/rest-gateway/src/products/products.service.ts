import { Injectable, HttpService } from '@nestjs/common';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class ProductsService {
  constructor(private httpClient: HttpService) {}

  getAll = () =>
    this.httpClient.get(process.env.PRODUCTS_URL).pipe(
      map(response => response.data),
      catchError(error => throwError(error)),
    );

  getById = (id: number) =>
    this.httpClient.get(`http://localhost:9998/products/${id}`).pipe(
      map(response => response.data),
      catchError(error => throwError(error)),
    );

  post = (url: string) => this.httpClient.post(url);
}
