import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {PostsPageComponent} from "./pages/posts-page/posts-page.component";
import {PostPageComponent} from "./pages/post-page/post-page.component";

const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'posts',
                pathMatch: 'full'
            },
            {
                path: 'posts',
                component: PostsPageComponent,
            },
            {
                path: 'posts',
                children: [
                    {
                        path: ':id',
                        component: PostPageComponent
                    }
                ]
            }
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MainRoutingModule {

}
