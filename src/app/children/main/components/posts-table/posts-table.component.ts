import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {IPostResponseModel} from "../../data/response-models/post.response-model.interface";
import {PostsService} from "../../data/services/posts.service";
import {Router} from "@angular/router";

@Component({
    selector: 'posts-table',
    templateUrl: './posts-table.component.html',
    styleUrls: ['./styles/posts-table.component.scss']
})
export class PostsTableComponent implements OnInit {
    public posts$: Observable<IPostResponseModel[]> = new Observable<IPostResponseModel[]>();

    constructor(
        private postsService: PostsService,
        private _router: Router
    ) {
    }

    public ngOnInit(): void {
        this.posts$ = this.postsService.posts$;
        this.postsService.getPosts().subscribe();
    }

    public open(id: number): void {
        this._router.navigate([`cabinet/posts/${id}`])
    }
}
