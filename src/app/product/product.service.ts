import { Injectable } from '@angular/core';

import { Category } from '../first/category.enum';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Product[]{
    return [
      new Product('Banana', 'yellow and sweet', 10, Category.Left, true),
      new Product('Apple', 'red and sweet', 20, Category.Down, true),
      new Product('Lime', 'green and sour', 15, Category.Right, false),
    ];
  }
}
// желательно разложить сущности этой папки по отдельным папкам
// модели к моделям, сервисы к сервисам
