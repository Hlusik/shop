import { Component, OnInit } from '@angular/core';

import { Product } from '../product/product.model';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  cart: Product[];

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
  }

}
