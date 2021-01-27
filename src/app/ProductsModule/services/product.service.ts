import { Injectable } from '@angular/core';

import { Category } from 'src/app/SharedModule/category.enum';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Product[]{
    return [
      new Product(1, 'Banana', 'yellow and sweet', 10, Category.Left, true),
      new Product(2, 'Apple', 'red and sweet', 20, Category.Down, true),
      new Product(3, 'Lime', 'green and sour', 15, Category.Right, false),
    ];
  }
}
