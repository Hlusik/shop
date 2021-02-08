import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CartItemComponent } from './cart-list/cart-item/cart-item.component';
import { CartListComponent } from './cart-list/cart-list.component';

import { SharedModule } from '../SharedModule/shared.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule
    ],
    declarations: [
        CartListComponent,
        CartItemComponent
    ],
    exports: [
        CartListComponent,
    ]
})
export class CartModule {}
