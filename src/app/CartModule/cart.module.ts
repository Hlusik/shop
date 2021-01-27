import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartItemComponent } from './cart-list/cart-item/cart-item.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from '../SharedModule/highlight/highlight.directive';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
    ],
    declarations: [
        CartListComponent,
        CartItemComponent,
        HighlightDirective
    ],
    exports: [
        CartListComponent,
    ]
})
export class CartModule {}
