import {RouterModule} from "@angular/router";
import {LandingComponent} from "./landing.component";
const routes = [
    {path: '', component: LandingComponent}
];


export default RouterModule.forChild(routes);