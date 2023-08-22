import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'auth-layout',
    templateUrl: './auth-layout.web.component.html',
    styleUrls: ['./styles/auth-layout.web.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthLayoutWebComponent {
}
