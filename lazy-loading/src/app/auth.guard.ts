import { Injectable } from '@angular/core';
import {CanActivateFn } from '@angular/router';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };
@Injectable({
  providedIn:'root'
})
export class authGuard implements CanActivate{
  constructor(private authService:AuthService){}
    canActivate(){
    if(this.authService.isUserLoggedIn()){
return true;
    }
    else{
      console.log("Permission denied")
      return false;
    }
  }
}
