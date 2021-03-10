import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CanLoadGuard } from '../core/guard/can-load.guard';
import { ProcessOrderComponent } from '../OrdersModule/process-order/process-order.component';
import { CartListComponent } from './cart-list/cart-list.component';


const routes: Routes = [
    {
        path: 'cart',
        component: CartListComponent,
    },
    {
        path: 'order',
        component: ProcessOrderComponent,
        loadChildren: () => import('../OrdersModule/process-order.module').then(m => m.ProcessOrderModule),
        canLoad: [CanLoadGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CartRoutingModule { }
// некоректное название файла
