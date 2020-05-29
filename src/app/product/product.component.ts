import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  title = "Ürünler"
  products : Product[] =[
    {id:1, name: "Laptop", price:4500, categoryId: 1, description: "ASUS X543MA CELERON N4000 1.1GHZ-4GB RAM-500GB HDD-15.6-W10 NOTEBOOK", imageUrl: "https://images.unsplash.com/photo-1566476927456-446189d7b1ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"},
    {id:2, name: "Mause", price:45, categoryId: 2, description: "LOGITECH M171 MOUSE BLACK for ASUS X543MA CELERON N4000", imageUrl: "https://images.unsplash.com/photo-1566476927456-446189d7b1ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"}
  ]
  ngOnInit(): void {
  }

}
