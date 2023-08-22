import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {PostsPageComponent} from "./pages/posts-page/posts-page.component";
import {PostPageComponent} from "./pages/post-page/post-page.component";
import {AuthLayoutWebComponent} from "../auth/layuots/auth-layout/auth-layout.web.component";

const routes: Routes = [
    {
        path: '',
        component: AuthLayoutWebComponent,
        children: [
            {
                path: '',
                redirectTo: 'posts',
                pathMatch: 'full'
            },
            {
                path: 'posts',
                component: PostsPageComponent,
                children: [
                    {
                        path: ':id',
                        component: PostPageComponent
                    }
                ]
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MainRoutingModule {

}
