import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValidateCanactivateComponent } from './modules/routeGaurd/validate-canactivate/validate-canactivate.component';
import { ValidateCanActivateChildComponent } from './modules/routeGaurd/validate-can-activate-child/validate-can-activate-child.component';

@NgModule({
  declarations: [
    AppComponent,
    ValidateCanactivateComponent,
    ValidateCanActivateChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
