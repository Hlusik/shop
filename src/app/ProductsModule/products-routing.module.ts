import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product-list/product/product.component';
import { ProductViewComponent } from './product-view/product-view.component';

const routes: Routes = [
{
    path: 'product-list',
    component: ProductListComponent
},
{
    path: 'product/:productID',
    component: ProductViewComponent
}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule { }