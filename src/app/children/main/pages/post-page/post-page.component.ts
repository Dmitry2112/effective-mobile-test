import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
    selector: 'post-page',
    templateUrl: './post-page.component.html',
    styleUrls: ['styles/post-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostPageComponent {

}
