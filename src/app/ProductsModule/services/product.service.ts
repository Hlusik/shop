import { Injectable } from '@angular/core';

import { Category } from 'src/app/SharedModule/enums/category.enum';
import { Product } from '../models/product.model';

const products = [
  new Product(1, 'Banana', 'yellow and sweet', 10, Category.Left, true),
  new Product(2, 'Apple', 'red and sweet', 20, Category.Down, true),
  new Product(3, 'Lime', 'green and sour', 15, Category.Right, false),
];

const productsPromise = Promise.resolve(products);
@Injectable({
  providedIn: 'root'
})
export class ProductService {


  getProducts(): Promise<Product[]>{
    return productsPromise;
  }

  getProduct(id: number | string): Promise<Product> {
    return this.getProducts()
    .then(products => products.find(product => product.id === +id))
    .catch(() => Promise.reject('Error in product method'));
  }

}
