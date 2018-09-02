import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import landingRoutes from "./landing.routes";

@NgModule({
    imports:[CommonModule, landingRoutes],
    declarations: []
})
export default class LandingModule{}