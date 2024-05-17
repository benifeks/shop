import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Subscription } from 'rxjs';

import { IProducts } from 'src/models/products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product: IProducts;
  productSubscrition: Subscription;

  public constructor(public route: ActivatedRoute) {}
  public ngOnInit(): void {
    this.productSubscrition = this.route.data.subscribe((data: Data) => {
      this.product = data['data'];
    });
  }
}
