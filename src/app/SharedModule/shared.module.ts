import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OrderBy } from './pipes/order-by.pipe';


@NgModule({
  declarations: [
    OrderBy
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OrderBy,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
