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

    //  this.http.get<any[]>("http://localhost:3000/signUpUsers")
    //   .toPromise()
    //   .then(data => {
    //     this.abc=data;
    // for(let i=0;i<this.abc.length;i++){
    //   if(this.abc[i].role==="supervisor"){
    //     this.router.navigate(['/product/Product']);
    //   }else
    //   console.log("ppermission Denied")
    // }
    //  console.log("datatattataatata",this.abc[2].role)
    // if(this.abc[0].role==="supervisor"){
    //   console.log("ppermission Denied Yesss")
    //   this.def=false;
    // }
    // })
    // .catch(error => {
    //   console.error('Error fetching data:', error);
    //   return false;
    // });
    const storedValue = localStorage.getItem('Role');
    this.myBooleanVariable = storedValue ? JSON.parse(storedValue) : false;
    if (this.myBooleanVariable === "supervisor") {
      return true;
    } else {
      return false;
    }
  }
}
