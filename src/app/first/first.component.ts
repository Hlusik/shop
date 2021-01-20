import { Component, OnInit } from '@angular/core';

import { Category } from './category.enum';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  name: string ;
  description: string;
  price: number;
  category: Category;
  isAvailable: boolean;

  constructor() { }

  ngOnInit(): void {
    this.name = 'Shop';
    this.description = 'Description';
    this.price = 10;
    this.category = Category.Left;
    this.isAvailable = true;
  }

}
