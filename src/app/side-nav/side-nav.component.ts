import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    selector: 'nav-items',
    template: `
        <mat-nav-list>
            <mat-list-item *ngFor="let item of items" (click)="goTo(item.route)">
                <mat-icon matListIcon>{{item.icon}}</mat-icon>
                <h3 matLine>{{item.title}}</h3>
            </mat-list-item>
        </mat-nav-list>`
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