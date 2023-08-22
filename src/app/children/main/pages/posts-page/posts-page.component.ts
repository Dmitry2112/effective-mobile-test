import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {IPostResponseModel} from "../../data/response-models/post.response-model.interface";
import {PostsService} from "../../data/services/posts.service";

@Component({
    selector: 'posts-page',
    templateUrl: './posts-page.component.html',
    styleUrls: ['styles/posts-page.component.scss']
})
export class PostsPageComponent implements OnInit {
    //public posts$: Observable<IPostResponseModel[]> = new Observable<IPostResponseModel[]>();
    public posts: IPostResponseModel[] = [];

    constructor(private postsService: PostsService) {
    }

    public ngOnInit(): void {
        //this.posts$ = this.postsService.posts$;
        this.postsService.getPosts().subscribe((posts: IPostResponseModel[]) => {
            this.posts = posts;
        });
    }
}
