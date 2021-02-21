import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { OrdersComponent } from './components/orders/orders.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AdminRoutingModule
    ],
    declarations: [
        AdminComponent,
        ProductsComponent,
        OrdersComponent,
    ],
    exports: [
        AdminComponent,
    ],
    // providers: [CanLoadGuard]
})
export class AdminModule {}
