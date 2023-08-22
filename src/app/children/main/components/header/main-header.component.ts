import {ChangeDetectionStrategy, Component} from "@angular/core";
import {AuthService} from "../../../auth/data/services/auth.service";

@Component({
    selector: 'main-header',
    templateUrl: './main-header.component.html',
    styleUrls: ['styles/main-header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainHeaderComponent {
    constructor(private _authService: AuthService) {
    }
    public logout(): void {
        this._authService.logout();
    }
}
