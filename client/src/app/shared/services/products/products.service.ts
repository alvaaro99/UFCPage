import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { IProduct } from '../../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: IProduct[] = [];
  constructor(private http: HttpService) {}

  getAll = () =>
    this.http
      .get(environment.GATEWAY_URL + environment.ENDPOINT_PRODUCTS)
      .pipe(map((products: IProduct[]) => (this.products = products)));
}
