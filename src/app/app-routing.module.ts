import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductsAddClassicComponent } from './product/products-add-classic/products-add-classic.component';
import { ProductsAddReactiveComponent } from './product/products-add-reactive/products-add-reactive.component';


const routes: Routes = [
  {path : 'products', component : ProductComponent},
  {path : '', redirectTo : 'products', pathMatch : 'full'},
  {path : 'products/category/:categoryId', component:ProductComponent},
  {path : 'products-add-reactive', component : ProductsAddReactiveComponent},
  {path : 'products-add-classic', component : ProductsAddClassicComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
