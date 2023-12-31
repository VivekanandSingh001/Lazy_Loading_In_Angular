import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product/product.component';
import { productGuardGuard } from '../product-guard.guard';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    HttpClientModule,
  ],
  providers:[productGuardGuard]
})
export class ProductModule { }
