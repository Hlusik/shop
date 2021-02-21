import { Category } from 'src/app/SharedModule/enums/category.enum';

export class Product {
    constructor(
      public id: number = null,
      public name: string = '',
      public description: string = '',
      public price: number = 0,
      public category: Category = Category.Down,
      public isAvailable: boolean = true,
      public imgUrl: string = '',
    ) {}
  }
