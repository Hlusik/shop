import { Injectable } from '@angular/core';

import { Category } from 'src/app/SharedModule/enums/category.enum';
import { Product } from '../models/product.model';

const products = [
  new Product(1, 'Corn', 'yellow and sweet', 10, Category.Left, true, './../../../assets/img/corn.jpg'),
  new Product(2, 'Pumpkin', 'red and sweet', 20, Category.Down, true, './../../../assets/img/pumpkin.jpg'),
  new Product(3, 'Lime', 'green and sour', 15, Category.Right, false, './../../../assets/img/lime.jpg'),
  new Product(4, 'Kiwi', 'yellow and sweet', 10, Category.Left, true, './../../../assets/img/kiwi.jpg'),
  new Product(5, 'Peach', 'red and sweet', 20, Category.Down, true, './../../../assets/img/peach.jpg')
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
