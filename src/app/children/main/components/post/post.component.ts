import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {IPostResponseModel} from "../../data/response-models/post.response-model.interface";
import {PostsService} from "../../data/services/posts.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
    selector: 'post',
    templateUrl: './post.component.html',
    styleUrls: ['./styles/post.component.scss']
})
export class PostComponent implements OnInit {
    public post$: Observable<IPostResponseModel> = new Observable<IPostResponseModel>();

    constructor(
        private _postsService: PostsService,
        private _route: ActivatedRoute
    ) {
    }

    public ngOnInit(): void {
        this.post$ = this._postsService.post$;
        this._route.params.subscribe((params: Params): void => {
            this._postsService.getPostById(Number(params["id"])).subscribe();
        });
    }
}
