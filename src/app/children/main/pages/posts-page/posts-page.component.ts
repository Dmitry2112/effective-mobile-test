import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";

@Component({
    selector: 'posts-page',
    templateUrl: './posts-page.component.html',
    styleUrls: ['styles/posts-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsPageComponent {
}
