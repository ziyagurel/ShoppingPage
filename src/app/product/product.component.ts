import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import {AlertifyService} from '../services/alertify.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  //servis kullanılırken constructor içerisinde instance olusuturulur. alertifyService isiminde AlertifyService nesnesi..
  constructor(private alertifyService:AlertifyService, private http:HttpClient) { }
  title = "Ürünler"
  filterText = ""
  products : Product[];
  path = "http://localhost:3000/products";
  //Program ilk çalıştığında burası başlar.
  ngOnInit(): void {
    this.http
    .get<Product[]>(this.path)
    .subscribe(data=>{
      this.products = data;
    });
  }

  addToCart(product){
    this.alertifyService.success(product.name + " isimli ürün sepete eklendi...")
    //alert(product.name + " isimli ürün sepete eklendi...")
  }
}
