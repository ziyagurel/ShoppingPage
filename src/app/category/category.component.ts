import { Component, OnInit } from '@angular/core';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }
  title = "Kategoriler"
  categories : Category[] = [
    {id:1, name:"Bilgisayar"},
    {id:2, name:"Bilgisayar Yazılım"},
    {id:3, name:"Bilgisayar Donanım"},
    {id:4, name:"Kitap"},
    {id:5, name:"Kulaklık"}
  ]
  ngOnInit(): void {
  }

}
