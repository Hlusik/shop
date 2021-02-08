import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Cart } from '../models/cart.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit, OnDestroy {
  carts: Cart[];
  private sub: Subscription;
  sortOrder: boolean;
  sortOption: object;

  options = [
    {value: 'product.name', name: 'name'},
    {value: 'product.price', name: 'price'},
    {value: 'amount', name: 'amount'},
  ];

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.sortOrder = true;
    this.sortOption = this.options[0];
    this.sub = this.cartService.channel$.subscribe(
      data => this.carts = data
    );
    this.carts = this.cartService.getCarts();
  }

  public onChangeAmount(cart: Cart): void{
    this.cartService.changeCartAmount(cart);
  }

  public onDeleteCart(cart: Cart): void{
    this.cartService.deleteCart(cart);
  }

  onChange(e: any): void{
    this.sortOrder = e.target.checked;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
