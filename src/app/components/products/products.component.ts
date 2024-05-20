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

  public openDialog(product?: IProducts): void {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.width = '500px';
    dialogConfig.data = product;
    const dialogRef = this.dialog.open(DialogBoxComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        if (data && data.id) {
          this.updateData(data);
          return;
        }
        this.postData(data);
      }
    });
  }

  public updateData(product: IProducts) {
    this.productsService.updateProduct(product).subscribe((data) => {
      this.products = this.products.map((product) => {
        if (product.id === data.id) {
          return data;
        }
        return product;
      });
    });
  }

  public postData(data: IProducts) {
    this.productsService
      .postProduct(data)
      .subscribe((data) => this.products.push(data));
  }

  public deleteItem(id: number) {
    this.productsService.deleteProduct(id).subscribe(() =>
      this.products.find((product: IProducts) => {
        if (id === product.id) {
          let indexProduct = this.products.findIndex((item) => item.id === id);
          this.products.splice(indexProduct, 1);
        }
      })
    );
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
