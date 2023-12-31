import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {authGuard} from "./children/auth/guards/auth.guard";
import {NotFoundComponent} from "./component/not-found/not-found.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full'
    },
    {
        path: 'auth',
        loadChildren: () => import('./children/auth/auth-routing.module').then(module => module.AuthRoutingModule),
    },
    {
        path: 'cabinet',
        canActivate: [authGuard],
        loadChildren: () => import('./children/main/main-routing.module').then(module => module.MainRoutingModule),
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
