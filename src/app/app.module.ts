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
    // Если модуль загружается как лейзи, то его не надо включать в импорты,
    // иначе он собирается в main.js, а не в отдельный файл *.js
    // Гард работает
    // ProcessOrderModule,
    AdminModule,
    LoginModule,
    // MUST BE LAST
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
