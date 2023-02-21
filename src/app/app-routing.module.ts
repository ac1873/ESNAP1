import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', loadChildren: () => import('./login-register/login-register.module').then(x => x.LoginRegisterModule) },
  { path: 'dashboard', loadChildren: () => import('./home/home.module').then(x => x.HomeModule) },
  { path: 'productDetails', loadChildren: () => import('./products/products.module').then(x => x.ProductsModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
