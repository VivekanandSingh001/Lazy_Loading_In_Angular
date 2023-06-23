import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Category1RoutingModule } from './category1-routing.module';
import { Category1Component } from './category1/category1.component';
import { categoryGuardGuard } from '../category-guard.guard';


@NgModule({
  declarations: [
    Category1Component
  ],
  imports: [
    CommonModule,
    Category1RoutingModule
  ],
  providers:[categoryGuardGuard],
})
export class Category1Module { }
