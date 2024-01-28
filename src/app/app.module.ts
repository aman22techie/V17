import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/authentication/login/login.component';
import { PortalComponent } from './modules/dashboard/portal/portal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PortalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
