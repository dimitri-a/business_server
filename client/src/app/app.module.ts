import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { HerodetailComponent } from './components/herodetail/herodetail.component';

import appRoutes from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HerodetailComponent
  ],
  imports: [
    BrowserModule,appRoutes
  ],
    providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
