import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteGaurdRoutingModule } from './routeGaurdRoute';
import { AuthService } from './authenticationService';
import { UserToken, canActivateService } from './canActivate';

@NgModule({
  declarations: [  ],
  imports: [
    CommonModule,
    RouteGaurdRoutingModule
  ],
  providers:[AuthService,canActivateService,UserToken]
})
export class routeGaurdModule { }