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
    private cartService: CartService
  ) {}

  ngOnInit(): void {
  }

  public onChangeAmount() {
    this.changeAmount.emit(this.cart);
  }

  public onDeleteCart(){
    this.deleteCart.emit(this.cart);
  }
}
