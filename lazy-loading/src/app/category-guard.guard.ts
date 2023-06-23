import { CanActivate, CanActivateFn } from '@angular/router';

export class categoryGuardGuard implements CanActivate{
  myBooleanVariable: any;
  canActivate(){
    const storedValue = localStorage.getItem('Role');
    this.myBooleanVariable = storedValue ? JSON.parse(storedValue) : false;
    if (this.myBooleanVariable === "admin") {
      return true;
    } else {
      return false;
    }
  }
};
