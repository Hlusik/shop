import { NgModule } from '@angular/core';

import { CartItemComponent } from './cart-list/cart-item/cart-item.component';
import { CartListComponent } from './cart-list/cart-list.component';

import { HighlightDirective } from '../SharedModule/highlight/highlight.directive';

import { SharedModule } from '../SharedModule/shared.module';


@NgModule({
    imports: [
        SharedModule
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
