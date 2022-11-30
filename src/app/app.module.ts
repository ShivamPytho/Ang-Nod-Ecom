import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavTopComponent } from './shair/nav-top/nav-top.component';
import { NavBottomComponent } from './shair/nav-bottom/nav-bottom.component';
@NgModule({
  declarations: [
    AppComponent,
    NavTopComponent,
    NavBottomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
