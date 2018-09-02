import {RouterModule} from "@angular/router";

const routes = [
    {path: '', loadChildren: './components/landing/landing.module'}
];


export default RouterModule.forRoot(routes);
