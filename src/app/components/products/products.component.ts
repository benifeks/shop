import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProducts } from 'src/models/products';
import { ProductsService } from 'src/services/products.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: IProducts[];
  productsSubscription: Subscription;

  public constructor(
    private productsService: ProductsService,
    public dialog: MatDialog
  ) {}

  public openDialog(): void {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.width = '500px';
    const dialogRef = this.dialog.open(DialogBoxComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((result) => {
      if (!result) return;
      this.postData(result);
    });
  }

  public postData(data: IProducts) {
    this.productsService
      .postProduct(data)
      .subscribe((data) => this.products.push(data));
  }

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
