import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { authGuard } from '../auth.guard';
import { CanDeactivateGuardService } from '../candeactivate-guard.service';
console.log("This is Home Module")

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  providers: [authGuard,CanDeactivateGuardService]
})
export class HomeModule { }
