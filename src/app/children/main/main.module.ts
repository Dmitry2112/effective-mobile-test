import {NgModule} from "@angular/core";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {RouterModule} from "@angular/router";
import {ShortenPipe} from "./pipes/shorten.pipe";
import {MainHeaderComponent} from "./components/header/main-header.component";
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {PostsPageComponent} from "./pages/posts-page/posts-page.component";
import {PostPageComponent} from "./pages/post-page/post-page.component";
import {AuthModule} from "../auth/auth.module";
import {PostComponent} from "./components/post/post.component";
import {PostsTableComponent} from "./components/posts-table/posts-table.component";


@NgModule({
    declarations: [
        PostsPageComponent,
        PostPageComponent,
        PostComponent,
        PostsTableComponent,
        MainHeaderComponent,
        MainLayoutComponent,
        ShortenPipe
    ],
    imports: [
        CommonModule,
        RouterModule,
        AuthModule,
        NgOptimizedImage
    ],
    exports: [],
    providers: []
})
export class MainModule {

}
