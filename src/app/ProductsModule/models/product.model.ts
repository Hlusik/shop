import { Category } from 'src/app/SharedModule/category.enum';

export class Product {
    constructor(
      public id: number,
      public name: string,
      public description: string,
      public price: number,
      public category: Category,
      public isAvailable: boolean,
    ) {}
  }
