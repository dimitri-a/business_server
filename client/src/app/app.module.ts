import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { HerodetailComponent } from './components/herodetail/herodetail.component';

import { routingModule } from "./routing.module";


@NgModule({
  declarations: [
    AppComponent  ],
  imports: [
    BrowserModule,routingModule
  ],
    providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
