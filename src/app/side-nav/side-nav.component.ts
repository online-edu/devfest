import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    selector: 'nav-items',
    template: `
        <md-nav-list>
            <md-list-item *ngFor="let item of items" (click)="goTo(item.route)">
                <md-icon mdListIcon>{{item.icon}}</md-icon>
                <h3 mdLine>{{item.title}}</h3>
            </md-list-item>
        </md-nav-list>`
})

export class SideNavComponent {
    items = [];

    constructor(private router: Router) {
        this.items = [
            {
                title: 'Agenda',
                icon: 'view_agenda',
                route: 'agenda'
            },
            {
                title: 'Speakers',
                icon: 'people',
                route: 'speakers'
            },
            {
                title: 'Location',
                icon: 'location_city',
                route: 'location'
            }
        ];
    }

    goTo(route: string) {
        this.router.navigate([route]);
    }
}