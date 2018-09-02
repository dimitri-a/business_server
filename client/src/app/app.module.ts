import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LandingComponent } from './components/landing/landing.component';

import { routingModule } from "./routing.module";
import { ShopDetailComponent } from './components/shopdetail/shopdetail.component';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    LandingComponent,ShopDetailComponent ,AppComponent ],
  imports: [
    BrowserModule,routingModule
  ],
    providers: [],
  bootstrap: [LandingComponent]
})
export class AppModule { }
