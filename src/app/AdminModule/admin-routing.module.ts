import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardGuard } from '../core/guard/auth-guard.guard';


import { AdminComponent } from './admin.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';


const routes: Routes = [
{
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuardGuard],
    children: [
        {
            path: '',
            canActivateChild: [AuthGuardGuard],
            children: [
                { path: 'products', component: ProductsComponent },
                { path: 'orders', component: OrdersComponent },
            ]
        }
    ]
}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {
    static components = [
        AdminComponent,
        ProductsComponent,
        OrdersComponent,
    ];
}
