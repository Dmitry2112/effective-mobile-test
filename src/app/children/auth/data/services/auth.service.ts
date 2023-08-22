import { Injectable } from '@angular/core';
import { IAuthUserRegisterRequestModel } from '../request-models/auth-user-register.request-model.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IAuthUserResponseModel } from '../response-models/auth-user.response-model.interface';
import { apiUrlAuth } from '../../../../data/api/api';
import { Router } from '@angular/router';
import { IAuthUserLoginRequestModel } from '../request-models/auth-user-login.request-model.interface';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private _token: string | undefined = undefined;

    constructor(
        private _http: HttpClient,
        private _router: Router
    ) {
    }

    public register(user: IAuthUserRegisterRequestModel): Observable<IAuthUserResponseModel> {
        return this._http.post<IAuthUserResponseModel>(`${apiUrlAuth}/register`, user);
    }

    public login(user: IAuthUserLoginRequestModel): Observable<IAuthUserResponseModel> {
        return this._http.post<IAuthUserResponseModel>(`${apiUrlAuth}/login`, user)
            .pipe(
                tap((response: IAuthUserResponseModel) => {
                    this.setToken(response.accessToken);
                })
            );
    }

    public logout(): void {
        this.removeToken();
        localStorage.clear();
        this._router.navigate(['auth/login']);
    }

    public isAuthenticated(): boolean {
        return !!this._token || !!localStorage.getItem('token');
    }

    public isAdmin(): boolean {
        return localStorage.getItem('role') === 'ADMIN';
    }

    private setToken(token: string): void {
        localStorage.setItem('token', token);
        this._token = token;
    }

    private removeToken(): void {
        localStorage.removeItem('token');
        this._token = undefined;
    }
}
