import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchResultDashboardComponent } from './search-result-dashboard/search-result-dashboard.component';
import { TilesDashboardComponent } from './tiles-dashboard/tiles-dashboard.component';
import { ProductDetailsComponent } from '../products/product-details/product-details.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      { path: '', component: TilesDashboardComponent },
      { path: 'searchresult', component: SearchResultDashboardComponent },
      { path: 'itemDetails', component: ProductDetailsComponent }

    ]
  },

];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
