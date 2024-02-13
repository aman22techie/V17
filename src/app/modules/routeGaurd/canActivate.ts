import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from "@angular/router";

@Injectable()
export class UserToken {}

@Injectable()
export class canActivateService {
  canActivate(currentUser: UserToken): boolean {
    debugger;
    // if token is valid return true other wise return false.
    let isValid=true;
    if(isValid){
        return true;
    }else{
        alert('Not Allowed');
        return false;
    }
  }
}

export const canActivateTeam: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  return inject(canActivateService).canActivate(inject(UserToken));
};