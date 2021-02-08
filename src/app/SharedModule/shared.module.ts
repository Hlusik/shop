import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OrderBy } from './pipes/order-by.pipe';
import { HighlightDirective } from './directives/highlight/highlight.directive';

@NgModule({
  declarations: [
    OrderBy,
    HighlightDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OrderBy,
    CommonModule,
    FormsModule,
    HighlightDirective
  ]
})
export class SharedModule { }