import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';



@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductListingComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    AutocompleteLibModule,

  ]
})
export class ProductsModule { }
