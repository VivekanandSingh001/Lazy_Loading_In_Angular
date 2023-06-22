import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { authGuard } from '../auth.guard';
import { CanDeactivateGuardService } from '../candeactivate-guard.service';

const routes: Routes = [
  {path:"Home",component:HomeComponent,
  canActivate:[authGuard],canDeactivate:[CanDeactivateGuardService],
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
