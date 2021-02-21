import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product-list/product/product.component';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
    imports: [
        CommonModule,
        ProductsRoutingModule,
    ],
    declarations: [
        ProductListComponent,
        ProductComponent
    ],
    exports: [
        ProductListComponent
    ]
})
export class ProductModule {}
