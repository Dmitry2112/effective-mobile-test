import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'main-layout',
    templateUrl: './main-layout.component.html',
    styleUrls: ['./styles/main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

    public loader: boolean = true;

    public ngOnInit(): void {
        this.loader = false
    }

}
