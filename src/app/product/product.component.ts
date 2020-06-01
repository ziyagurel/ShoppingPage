import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import {AlertifyService} from '../services/alertify.service';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService]
})
export class ProductComponent implements OnInit {

  //servis kullanılırken constructor içerisinde instance olusuturulur. alertifyService isiminde AlertifyService nesnesi..
  constructor(
    private alertifyService:AlertifyService,
    private service:ProductService,
    private activatedRoute:ActivatedRoute) { }
  title = "Ürünler"
  filterText = ""
  products : Product[];
  //Program ilk çalıştığında burası başlar.
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.service.getProductList(params["categoryId"]).subscribe(data=>{
        this.products = data
      })
    })
  }

  addToCart(product){
    this.alertifyService.success(product.name + " isimli ürün sepete eklendi...")
    //alert(product.name + " isimli ürün sepete eklendi...")
  }
}
