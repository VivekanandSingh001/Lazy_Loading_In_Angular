import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExclusiveComponent } from './exclusive/exclusive.component';
import { SemiExclusiveComponent } from './semi-exclusive/semi-exclusive.component';
import { NoExclusiveComponent } from './no-exclusive/no-exclusive.component';
import { DataTableComponent } from './data-table/data-table.component';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';
import { NgOnChangesChildComponent } from './ng-on-changes-child/ng-on-changes-child.component';

const routes: Routes = [
  {path:'',redirectTo:'login/Login',pathMatch:'full'},
  {path:'exclusive',component:ExclusiveComponent},
  {path:'semi-exclusive',component:SemiExclusiveComponent},
  {path:'no-exclusive',component:NoExclusiveComponent},
  {path:'dataTable',component:DataTableComponent},
  {path:'lifeCycle',component:LifeCycleHooksComponent},
  {path:'changeChild',component:NgOnChangesChildComponent},
  {
    path:"register",loadChildren:()=>import("../app/register/register.module").then(mod=>mod.RegisterModule)
  },
  {
    path:"login",loadChildren:()=>import("../app/login/login.module").then(mod=>mod.LoginModule)
  },
  {path:"home",loadChildren:()=>import("../app/home/home.module")
  .then(mod=>mod.HomeModule)
},
{
  path:'product',loadChildren:()=>import("../app/product/product.module").then(mod=>mod.ProductModule)
},
{
  path:'category',loadChildren:()=>import("../app/category1/category1.module").then(mod=>mod.Category1Module)
},
{path:'**',redirectTo:'login/Login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
