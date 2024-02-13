import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivateService } from './canActivate';
import { ValidateCanactivateComponent } from './validate-canactivate/validate-canactivate.component';


const routes: Routes = [ 
  {
    path: 'goCanActivate',
    component: ValidateCanactivateComponent,
    canActivate: [canActivateService],
    canActivateChild:[],
    children:[{

    }]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouteGaurdRoutingModule {
  constructor(){
    debugger;
  }
 }
