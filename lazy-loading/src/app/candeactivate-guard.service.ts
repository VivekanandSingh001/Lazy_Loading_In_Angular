import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from "@angular/router";
import { HomeComponent } from "./home/home/home.component";



export class CanDeactivateGuardService implements CanDeactivate<HomeComponent>{
canDeactivate(componenet:HomeComponent,currentRoute:ActivatedRouteSnapshot,currentState:RouterStateSnapshot,nextState:RouterStateSnapshot){
    return true;
}
}