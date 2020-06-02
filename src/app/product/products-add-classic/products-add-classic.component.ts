import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/category/category';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-products-add-classic',
  templateUrl: './products-add-classic.component.html',
  styleUrls: ['./products-add-classic.component.css'],
  providers: [CategoryService]
})
export class ProductsAddClassicComponent implements OnInit {

  constructor(private categoryService : CategoryService) { }
  model : Product = new Product();
  categories : Category[];

  ngOnInit(): void {
    this.categoryService.getCategoriList().subscribe(data=>{
      this.categories = data
    })
  }

  add(form:NgForm){
    console.log(form.value.name);
  }

}
