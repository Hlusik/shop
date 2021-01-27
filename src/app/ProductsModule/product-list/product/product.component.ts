import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/CartModule/services/cart.service';

import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input()
  product: Product;

  @Output()
  addToCart: EventEmitter<Product> = new EventEmitter<Product>();


  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

  public onBuy(): void {
    this.addToCart.emit(this.product);
  }

}
