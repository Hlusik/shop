import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Product } from 'src/app/ProductsModule/models/product.model';
import { Cart } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartProducts: Product[];
  private totalQuantity: number;
  private totalSum: number;

  // Observable cart[] sources
  private channel = new Subject<Cart[]>();

  // Observable cart[] streams
  public channel$ = this.channel.asObservable();

  // getProducts === getCartProducts()
  getCartProducts(): Cart[] {
    let carts: Cart[] = [];

    if (localStorage.getItem('productCarts')) {
      carts = JSON.parse(localStorage.getItem('productCarts'));
    }
    return carts;
  }

  addProduct(product: Product): void{
    let carts: Cart[] = (JSON.parse(localStorage.getItem('productCarts'))) ?
      JSON.parse(localStorage.getItem('productCarts')) : [];
    const ourCart: Cart = carts?.find(item => item.product.id === product.id);

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
  publishCArtData(data: Cart[]): void {
    this.channel.next(data);
  }

  //increaseQuantity()/decreaseQuantity() + changeQuantity() === changeCartAmount
  changeCartAmount(cart: Cart): void {
    const carts: Cart[] = (JSON.parse(localStorage.getItem('productCarts'))) ?
      JSON.parse(localStorage.getItem('productCarts')) : [];
    const ourCart: Cart = carts?.find(item => item.product.id === cart.product.id);

    if (ourCart) {
      carts.find(item => item.product.id === cart.product.id).amount = cart.amount;
    }
    localStorage.setItem('productCarts', JSON.stringify(carts));
  }

  removeProduct(cart: Cart): void {
    let carts: Cart[] = (JSON.parse(localStorage.getItem('productCarts'))) ?
      JSON.parse(localStorage.getItem('productCarts')) : [];

    carts = carts?.filter(item => item.product.id !== cart.product.id);
    localStorage.setItem('productCarts', JSON.stringify(carts));
    this.publishCArtData(carts);
  }

  removeAllProducts(): void {
    localStorage.removeItem('productCarts');

    this.publishCArtData([]);
  }

  updateCartData(): void {

  }

  isEmptyCart(): boolean {
    let carts: Cart[] = (JSON.parse(localStorage.getItem('productCarts'))) ?
      JSON.parse(localStorage.getItem('productCarts')) : [];

    return (carts.length === 0);
  }

}
