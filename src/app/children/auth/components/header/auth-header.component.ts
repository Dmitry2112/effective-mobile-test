import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'auth-header',
    templateUrl: './auth-header.component.html',
    styleUrls: ['./styles/auth-header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthHeaderComponent {}
