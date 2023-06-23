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
import { ExclusiveService } from './exclusive.service';
import { HttpClientModule } from '@angular/common/http';
import { DataTableComponent } from './data-table/data-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExclusiveComponent,
    SemiExclusiveComponent,
    NoExclusiveComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ExclusiveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
