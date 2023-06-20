import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"register",loadChildren:()=>import("../app/register/register.module").then(mod=>mod.RegisterModule)
  },
  {
    path:"login",loadChildren:()=>import("../app/login/login.module").then(mod=>mod.LoginModule)
  },
  {path:"home",loadChildren:()=>import("../app/home/home.module")
  .then(mod=>mod.HomeModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
