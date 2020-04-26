import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { IProduct } from '../../models/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: IProduct[] = [];
  constructor(private http: HttpClient) {}

  getAll = () =>
    this.http
      .get(environment.GATEWAY_URL + environment.ENDPOINT_PRODUCTS)
      .pipe(map((products: IProduct[]) => (this.products = products)));
}
