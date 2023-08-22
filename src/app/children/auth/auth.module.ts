import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {LoginPageWebComponent} from "./pages/login-page/login.page.web.component";
import {RegisterPageWebComponent} from "./pages/register-page/register.page.web.component";
import {AuthLayoutWebComponent} from "./layuots/auth-layout/auth-layout.web.component";
import {AuthHeaderComponent} from "./components/header/auth-header.component";
import {RouterModule} from "@angular/router";
import {ValidationMessageComponent} from "./components/validation/message.validation.component";

@NgModule({
    declarations: [
        LoginPageWebComponent,
        RegisterPageWebComponent,
        AuthLayoutWebComponent,
        AuthHeaderComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        RouterModule,
        ValidationMessageComponent
    ],
    exports: [LoginPageWebComponent, RegisterPageWebComponent],
    providers: []
})
export class AuthModule {

}
