import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Product } from 'src/app/ProductsModule/models/product.model';
import { Cart } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // Observable cart[] sources
  private channel = new Subject<Cart[]>();

  // Observable cart[] streams
  public channel$ = this.channel.asObservable();

  getCarts(): Cart[]{
    let carts: Cart[] = [];

    if (localStorage.getItem('productCarts')) {
      carts = JSON.parse(localStorage.getItem('productCarts'));
    }
    return carts;
  }

  addToCart(product: Product): void{
    let carts: Cart[] = (JSON.parse(localStorage.getItem('productCarts'))) ?
      JSON.parse(localStorage.getItem('productCarts')) : [];
    let ourCart: Cart = carts?.find(item => item.product.id === product.id);

    if (ourCart) {
      ++ carts.find(item => item.product.id === product.id).amount;
    } else {
      const cart: Cart = {
        product,
        amount: 1
      };
      carts = [...carts, cart];
    }
    localStorage.setItem('productCarts', JSON.stringify(carts));
    this.publishCArtData(carts);
  }

  // Service message commands
  publishCArtData(data: Cart[]) {
    this.channel.next(data);
  }

  changeCartAmount(cart: Cart): void {
    let carts: Cart[] = (JSON.parse(localStorage.getItem('productCarts'))) ?
      JSON.parse(localStorage.getItem('productCarts')) : [];
    let ourCart: Cart = carts?.find(item => item.product.id === cart.product.id);

    if (ourCart) {
      carts.find(item => item.product.id === cart.product.id).amount = cart.amount;
    }
    localStorage.setItem('productCarts', JSON.stringify(carts));
  }

  deleteCart(cart: Cart) {
    let carts: Cart[] = (JSON.parse(localStorage.getItem('productCarts'))) ?
      JSON.parse(localStorage.getItem('productCarts')) : [];

    carts = carts?.filter(item => item.product.id !== cart.product.id);
    localStorage.setItem('productCarts', JSON.stringify(carts));
    this.publishCArtData(carts);
  }
}
