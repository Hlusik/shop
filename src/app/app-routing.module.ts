import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './AdminModule/admin.component';

import { CartListComponent } from './CartModule/cart-list/cart-list.component';
import { LoginComponent } from './LoginModule/login.component';


const routes: Routes = [
    {
        path: 'cart',
        component: CartListComponent
    },
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        redirectTo: '/product-list',
        pathMatch: 'full'
    },
    // {
    // The router will match this route if the URL requested
    // doesn't match any paths for routes defined in our configuration
    // path: '**',
    // component: PathNotFoundComponent
    // }
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
