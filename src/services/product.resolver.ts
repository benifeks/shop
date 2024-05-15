import { Injectable, inject } from '@angular/core';
import {
  ResolveFn,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IProducts } from 'src/models/products';
import { ProductsService } from './products.service';
import { EMPTY, catchError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class ProductResolver {
  public constructor(
    private http: HttpClient,
    public productsService: ProductsService,
    private router: Router
  ) {}
  public getProduct(id: number) {
    return this.http.get<IProducts>(`${this.productsService.url}/${id}`).pipe(
      catchError(() => {
        this.router.navigate(['products']);
        return EMPTY;
      })
    );
  }
}

export const productResolver: ResolveFn<IProducts> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return inject(ProductResolver).getProduct(route.params?.['id']);
};
