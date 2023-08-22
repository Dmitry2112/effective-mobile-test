import {ChangeDetectionStrategy, Component, OnDestroy} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from '../../data/services/auth.service';
import { ILoginForm } from '../../data/interfaces/login-form.interface';
import { passwordValidator } from '../../validators/password.validator';
import { IAuthUserLoginRequestModel } from '../../data/request-models/auth-user-login.request-model.interface';


@Component({
    selector: 'auth-login-page',
    templateUrl: './login.page.web.component.html',
    styleUrls: ['./styles/login.page.web.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageWebComponent implements OnDestroy {
    public loginForm!: FormGroup<ILoginForm>;

    private _loginSubscription!: Subscription;

    constructor(
        private _auth: AuthService,
        private _router: Router,
        private _route: ActivatedRoute
    ) {
        this.loginForm = new FormGroup<ILoginForm>({
            email: new FormControl('', {
                nonNullable: true,
                validators: [Validators.required, Validators.email]
            }),
            password: new FormControl('', {
                nonNullable: true,
                validators: [
                    Validators.required,
                    Validators.minLength(6),
                    passwordValidator
                ]
            })
        });
    }

    public ngOnDestroy(): void {
        if (this._loginSubscription) {
            this._loginSubscription.unsubscribe();
        }
    }

    public onSubmit(): void {
        if (this.loginForm.invalid) {
            this.loginForm.markAllAsTouched();

            return;
        }
        const user: IAuthUserLoginRequestModel = {
            email: this.loginForm.controls.email.value,
            password: this.loginForm.controls.password.value
        };
        this.loginForm.disable();
        this._loginSubscription = this._auth
            .login(user)
            .subscribe(
                () => {
                    this._router.navigate(['/cabinet']);
                }
            );
    }
}
