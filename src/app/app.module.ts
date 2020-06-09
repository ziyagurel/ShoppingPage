import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { ProductFilterPipe } from './product/product-filter.pipe';
import { AlertifyService } from './services/alertify.service';
import { from } from 'rxjs';
import { ProductsAddClassicComponent } from './product/products-add-classic/products-add-classic.component';
import { ProductsAddReactiveComponent } from './product/products-add-reactive/products-add-reactive.component';
import { LoginComponent } from './login/login.component';
import { AccountService } from './services/account.service';
import { LoginGuard } from './login/login.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CategoryComponent,
    ProductComponent,
    ProductFilterPipe,
    ProductsAddClassicComponent,
    ProductsAddReactiveComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  //providers içerisine eklenenle global servis olduğunu gösterir.
  providers: [AlertifyService, AccountService, LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
