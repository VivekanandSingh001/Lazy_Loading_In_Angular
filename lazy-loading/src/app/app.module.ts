import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { authGuard } from './auth.guard';
import { HeaderComponent } from './header/header.component';
import { ExclusiveComponent } from './exclusive/exclusive.component';
import { SemiExclusiveComponent } from './semi-exclusive/semi-exclusive.component';
import { NoExclusiveComponent } from './no-exclusive/no-exclusive.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExclusiveComponent,
    SemiExclusiveComponent,
    NoExclusiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
