import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExclusiveComponent } from './exclusive/exclusive.component';
import { SemiExclusiveComponent } from './semi-exclusive/semi-exclusive.component';
import { NoExclusiveComponent } from './no-exclusive/no-exclusive.component';

const routes: Routes = [
  {path:'',redirectTo:'login/Login',pathMatch:'full'},
  {path:'exclusive',component:ExclusiveComponent},
  {path:'semi-exclusive',component:SemiExclusiveComponent},
  {path:'no-exclusive',component:NoExclusiveComponent},
  {
    path:"register",loadChildren:()=>import("../app/register/register.module").then(mod=>mod.RegisterModule)
  },
  {
    path:"login",loadChildren:()=>import("../app/login/login.module").then(mod=>mod.LoginModule)
  },
  {path:"home",loadChildren:()=>import("../app/home/home.module")
  .then(mod=>mod.HomeModule)
},
{path:'**',redirectTo:'login/Login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
