import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessOrderComponent } from './process-order/process-order.component';

@NgModule({
  declarations: [
    ProcessOrderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProcessOrderComponent,
  ],
})
export class ProcessOrderModule { }
