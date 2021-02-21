import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/CartModule/services/cart.service';

import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Promise<Array<Product>>;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  public onAddProductToCart(product: Product): void{
    this.cartService.addProduct(product);
  }

  onViewProduct(product: Product): void {
    const link = ['/product', product.id];
    this.router.navigate(link);

  }

}
