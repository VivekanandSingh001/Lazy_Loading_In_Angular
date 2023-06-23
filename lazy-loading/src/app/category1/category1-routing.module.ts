import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Category1Component } from './category1/category1.component';
import { categoryGuardGuard } from '../category-guard.guard';

const routes: Routes = [
  {path:'Category',component:Category1Component,canActivate:[categoryGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Category1RoutingModule { }
