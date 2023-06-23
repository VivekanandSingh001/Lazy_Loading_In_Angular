import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { productGuardGuard } from '../product-guard.guard';

const routes: Routes = [
  {path:'Product',component:ProductComponent,canActivate:[productGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
