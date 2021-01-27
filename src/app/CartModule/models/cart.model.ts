import { Product } from 'src/app/ProductsModule/models/product.model';

export class Cart {
    constructor(
      public product: Product,
      public amount: number,
    ) {}
  }
