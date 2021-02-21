import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';

import { BrowserModule } from '@angular/platform-browser';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        BrowserModule
    ],
    declarations: [
        LoginComponent,
    ],
    exports: [
        LoginComponent,
    ],
    // providers: [CanLoadGuard]
})
export class LoginModule {}
