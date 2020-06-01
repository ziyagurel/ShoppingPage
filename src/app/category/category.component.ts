import { Component, OnInit } from '@angular/core';
import { Category } from './category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers:[CategoryService]
})
export class CategoryComponent implements OnInit {

  constructor(private service:CategoryService) { }
  title = "Kategoriler"
  categories : Category[];

  ngOnInit(): void {
    this.service.getCategoriList().subscribe(data=>{
      this.categories = data
    })
  }

}
