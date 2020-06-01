import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { Category } from '../category/category';

@Injectable()
export class CategoryService {

  constructor(private http:HttpClient) { }
  path = "http://localhost:3000/categories";

  getCategoriList():Observable<Category[]>{
    return this.http.get<Category[]>(this.path)
  }
}
