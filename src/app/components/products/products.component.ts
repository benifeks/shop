import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProducts } from 'src/models/products';
import { ProductsService } from 'src/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: IProducts[];
  productsSubscription: Subscription;

  public constructor(private productsService: ProductsService) {}

  public ngOnInit(): void {
    this.productsSubscription = this.productsService
      .getProducts()
      .subscribe((data) => {
        this.products = data;
      });
  }

  public ngOnDestroy(): void {
    if (this.productsSubscription) this.productsSubscription.unsubscribe();
  }
}
