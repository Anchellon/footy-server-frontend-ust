import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HostsignupComponent} from './hostsignup.component'

@Injectable({
  providedIn: 'root'
})
export class FormGuardGuard implements CanDeactivate<HostsignupComponent> {
  canDeactivate(
    component: HostsignupComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log("UnfulfilledformGuard")
    return component.canDeactivate() || window.confirm("Are you sure?");
    
  }
  
}
