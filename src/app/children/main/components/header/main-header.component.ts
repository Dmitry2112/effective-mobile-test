import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {AuthService} from "../../../auth/data/services/auth.service";

@Component({
    selector: 'main-header',
    templateUrl: './main-header.component.html',
    styleUrls: ['styles/main-header.component.scss']
})
export class MainHeaderComponent {
    constructor(private _authService: AuthService) {
    }
    public logout(): void {
        this._authService.logout();
    }
}
