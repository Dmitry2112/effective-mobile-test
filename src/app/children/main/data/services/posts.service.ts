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
    public posts$: Observable<IPostResponseModel[]> = this._posts$.asObservable();

    private _post$: BehaviorSubject<IPostResponseModel> = new BehaviorSubject<IPostResponseModel>({} as IPostResponseModel);
    public post$: Observable<IPostResponseModel> = this._post$.asObservable();

    constructor(
        private _http: HttpClient,
    ) {
    }

    public getPosts(): Observable<IPostResponseModel[]> {
        return this._http.get<IPostResponseModel[]>(`${apiUrlData}/posts`)
            .pipe(
                tap((posts: IPostResponseModel[]): void => {
                    this._posts$.next(posts);
                })
            );
    }

    public getPostById(id: number): Observable<IPostResponseModel> {
        return this._http.get<IPostResponseModel>(`${apiUrlData}/posts/${id}`)
            .pipe(
                tap((post: IPostResponseModel): void => {
                    this._post$.next(post);
                })
            );
    }
}
