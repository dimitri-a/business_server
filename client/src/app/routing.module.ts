import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { LandingComponent } from "./components/landing/landing.component";
import { ShopDetailComponent } from "./components/shopdetail/shopdetail.component";
import { AppComponent } from "./app.component";

const routes: Routes = [
  { path: "landing", component: LandingComponent },
  { path: "shop/:id", component: ShopDetailComponent },
  { path: "", redirectTo: "/landing", pathMatch: "full" }
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
