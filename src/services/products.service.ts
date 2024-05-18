import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IProducts, IProductsConfig } from 'src/models/products';

@Injectable()
export class ProductsService {
  url: string = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  public getProducts() {
    return this.http.get<IProducts[]>(this.url);
  }

  public postProduct(product: IProducts) {
    return this.http.post<IProducts>(this.url, product);
  }
}
