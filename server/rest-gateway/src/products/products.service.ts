import { Injectable, HttpService } from '@nestjs/common';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { NotFoundError } from 'src/exceptions/not-found-page.error';

@Injectable()
export class ProductsService {
  constructor(private httpClient: HttpService) {}

  getAll = () =>
    this.httpClient.get(process.env.PRODUCTS_URL).pipe(
      map(response => response.data),
      catchError(error =>
        !error.response
          ? throwError(new NotFoundError())
          : throwError(error.response),
      ),
    );

  getById = (id: number) =>
    this.httpClient.get(`${process.env.PRODUCTS_URL}${id}`).pipe(
      map(response => response.data),
      catchError(error =>
        !error.response
          ? throwError(new NotFoundError())
          : throwError(error.response),
      ),
    );
}
