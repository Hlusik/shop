import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CartItemComponent } from './cart-list/cart-item/cart-item.component';
import { CartListComponent } from './cart-list/cart-list.component';

import { SharedModule } from '../SharedModule/shared.module';
import { CartRoutingModule } from './cart-routong.module';
import { CanLoadGuard } from '../core/guard/can-load.guard';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        CartRoutingModule
    ],
    declarations: [
        CartListComponent,
        CartItemComponent
    ],
    exports: [
        CartListComponent,
    ],
    providers: [CanLoadGuard]
})
export class CartModule {}
