import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { MatInputModule } from '@angular/material/input';
import { TilesDashboardComponent } from './tiles-dashboard/tiles-dashboard.component';
import { SearchResultDashboardComponent } from './search-result-dashboard/search-result-dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent,
    TilesDashboardComponent,
    SearchResultDashboardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatAutocompleteModule,
    AutocompleteLibModule,
    MatInputModule,
  ]
})
export class HomeModule { }
