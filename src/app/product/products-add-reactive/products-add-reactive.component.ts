import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../product';
import { Category } from 'src/app/category/category';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-products-add-reactive',
  templateUrl: './products-add-reactive.component.html',
  styleUrls: ['./products-add-reactive.component.css'],
  providers: [CategoryService, ProductService]
})
export class ProductsAddReactiveComponent implements OnInit {

  constructor(
    private formBuilder : FormBuilder,
    private categoryService : CategoryService,
    private productService : ProductService,
    private alertifyService : AlertifyService) { }

    productAddForm:FormGroup;
    product:Product = new Product();
    categories : Category[];

    createProductAddForm(){
      this.productAddForm = this.formBuilder.group({
        name:["", Validators.required],
        price:["", Validators.required],
        categoryId:["", Validators.required],
        description:["", Validators.required],
        imageUrl:["", Validators.required],
      });
    }

  ngOnInit(): void {
    this.createProductAddForm();
    this.categoryService.getCategoriList().subscribe(data=>{
      this.categories = data
    })
  }

  add(){
    if(this.productAddForm.valid){
      this.product = Object.assign({},this.productAddForm.value);
    }
    this.productService.addproduct(this.product).subscribe(data=>{
      this.alertifyService.success(data.name + " isimli ürün başarıyla eklendi..")
    })
  }

}
