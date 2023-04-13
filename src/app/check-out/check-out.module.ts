import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckOutRoutingModule } from './check-out-routing.module';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    CheckoutComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    CheckOutRoutingModule,
    BrowserModule
  ]
})
export class CheckOutModule { }
