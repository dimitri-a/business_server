import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { LandingComponent } from "./components/landing/landing.component";
import { HerodetailComponent } from "./components/herodetail/herodetail.component";

const routes: Routes = [
  { path: "landing", component: LandingComponent },
  { path: "landing/:id", component: HerodetailComponent },
  { path: "", redirectTo: "/products", pathMatch: "full" }
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
