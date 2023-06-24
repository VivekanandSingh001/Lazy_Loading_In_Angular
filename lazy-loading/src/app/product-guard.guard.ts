import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class productGuardGuard implements CanActivate {
  myBooleanVariable: any;
  constructor(private http: HttpClient, private router: Router) { }

  canActivate() {
    const storedValue = localStorage.getItem('Role');
    this.myBooleanVariable = storedValue ? JSON.parse(storedValue) : false;
    if (this.myBooleanVariable === "supervisor") {
      return true;
    } else {
      return false;
    }
  }
}
