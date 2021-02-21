import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ProductModule } from './ProductsModule/product.module';
import { CartModule } from './CartModule/cart.module';
import { AppRoutingModule } from './app-routing.module';
import { ProcessOrderModule } from './OrdersModule/process-order.module';
import { AdminModule } from './AdminModule/admin.module';
import { LoginModule } from './LoginModule/login.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ProductModule,
    CartModule,
    ProcessOrderModule,
    AdminModule,
    LoginModule,
    // MUST BE LAST
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
