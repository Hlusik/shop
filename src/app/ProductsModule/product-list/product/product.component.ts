import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  @Output() viewProduct = new EventEmitter<Product>();


  constructor(
  ) { }

  ngOnInit(): void {
  }

  public onBuy(): void {
    this.addToCart.emit(this.product);
  }

  onViewProduct() {
    this.viewProduct.emit(this.product);
  }

}
