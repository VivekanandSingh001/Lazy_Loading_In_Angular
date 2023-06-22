import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup,FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { authGuard } from '../auth.guard';

console.log("This is Register Module")

@NgModule({
  declarations: [
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
})
export class RegisterModule { }
