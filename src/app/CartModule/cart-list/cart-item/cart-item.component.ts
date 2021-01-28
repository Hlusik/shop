import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Cart } from '../../models/cart.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  @Input()
  cart: Cart;

  @Output()
  changeAmount: EventEmitter<Cart> = new EventEmitter<Cart>();
  @Output()
  deleteCart: EventEmitter<Cart> = new EventEmitter<Cart>();

  constructor(
  ) {}

  ngOnInit(): void {
  }

  onChangeAmount(): void {
    this.changeAmount.emit(this.cart);
  }

  onDeleteCart(): void {
    this.deleteCart.emit(this.cart);
  }
}
