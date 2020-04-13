import { Injectable, HttpService } from '@nestjs/common';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class ProductsService {
  constructor(private httpClient: HttpService) {}

  getAll = () =>
    this.httpClient.get(process.env.PRODUCTS_URL).pipe(
      map(response => response.data),
      catchError(error =>
        !error.response
          ? throwError({ status: 404, data: 'url no encontrada' })
          : throwError(error.response),
      ),
    );

  getById = (id: number) =>
    this.httpClient.get(`${process.env.PRODUCTS_URL}${id}`).pipe(
      map(response => response.data),
      catchError(error =>
        !error.response
          ? throwError({ status: 404, data: 'url no encontrada' })
          : throwError(error.response),
      ),
    );
}
