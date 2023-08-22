import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {IPostResponseModel} from "../response-models/post.response-model.interface";
import {tap} from "rxjs/operators";
import {apiUrlData} from '../../../../data/api/api'

@Injectable({
    providedIn: 'root'
})
export class PostsService {
    private _posts$: BehaviorSubject<IPostResponseModel[]> = new BehaviorSubject<IPostResponseModel[]>([]);
    public posts$ = this._posts$.asObservable();

    constructor(
        private _http: HttpClient,
    ) {
    }

    public getPosts(): Observable<IPostResponseModel[]> {
        return this._http.get<IPostResponseModel[]>(`${apiUrlData}/posts`)
            .pipe(
                tap((posts: IPostResponseModel[]) => {
                    this._posts$.next(posts);
                })
            );
    }
}
