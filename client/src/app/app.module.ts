import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LandingComponent } from './components/landing/landing.component';
import { HerodetailComponent } from './components/herodetail/herodetail.component';

import { routingModule } from "./routing.module";


@NgModule({
  declarations: [
    LandingComponent,HerodetailComponent  ],
  imports: [
    BrowserModule,routingModule
  ],
    providers: [],
  bootstrap: [LandingComponent]
})
export class AppModule { }
