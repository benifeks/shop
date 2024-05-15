import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './components/base/base.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { BascketComponent } from './components/bascket/bascket.component';
import { productResolver } from 'src/services/product.resolver';

const routes: Routes = [
  { path: '', component: BaseComponent },
  { path: 'products', component: ProductsComponent },
  {
    path: 'product/:id',
    component: ProductDetailsComponent,
    resolve: { data: productResolver },
  },
  { path: 'bascket', component: BascketComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
