import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/category/category';
import { NgForm } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-products-add-classic',
  templateUrl: './products-add-classic.component.html',
  styleUrls: ['./products-add-classic.component.css'],
  providers: [CategoryService,ProductService]
})
export class ProductsAddClassicComponent implements OnInit {

  constructor(
    private categoryService : CategoryService,
    private productService : ProductService,
    private alert : AlertifyService) { }
  model : Product = new Product();
  categories : Category[];

  ngOnInit(): void {
    this.categoryService.getCategoriList().subscribe(data=>{
      this.categories = data
    })
  }

  add(form:NgForm){
    this.productService.addproduct(this.model).subscribe(data=>{
      this.alert.success("Ürün Başarıyla Eklendi...")
    })
  }

}
