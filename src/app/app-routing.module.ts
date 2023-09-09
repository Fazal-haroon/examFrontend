import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {SignupComponent} from "./pages/signup/signup.component";
import {HomeComponent} from "./pages/home/home.component";
import {LoginComponent} from "./pages/login/login.component";
import {DashboardComponent} from "./pages/admin/dashboard/dashboard.component";
import {UserDashboardComponent} from "./pages/user/user-dashboard/user-dashboard.component";

const routes: Routes = [
    {path: 'signup', component: SignupComponent, pathMatch: 'full',},
    {path: '', component: HomeComponent, pathMatch: 'full',},
    {path: 'login', component: LoginComponent, pathMatch: 'full',},
    {path: 'admin', component: DashboardComponent, pathMatch: 'full',},
    {path: 'user-dashboard', component: UserDashboardComponent, pathMatch: 'full',},
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
