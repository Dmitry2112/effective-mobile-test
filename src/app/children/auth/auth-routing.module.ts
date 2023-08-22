import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AuthLayoutWebComponent} from "./layuots/auth-layout/auth-layout.web.component";
import {isLoggedInGuard} from "./guards/isLoggedIn.guard";
import {LoginPageWebComponent} from "./pages/login-page/login.page.web.component";
import {RegisterPageWebComponent} from "./pages/register-page/register.page.web.component";

const routes: Routes = [
    {
        path: '',
        component: AuthLayoutWebComponent,
        canActivate: [isLoggedInGuard],
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', component: LoginPageWebComponent },
            { path: 'register', component: RegisterPageWebComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {

}
