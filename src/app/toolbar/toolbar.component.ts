import { Component } from '@angular/core';

@Component({
    selector: 'toolbar',
    template: `
        <mat-toolbar color="primary" class="mat-elevation-z6">
            <span>DeveFest 2017</span>
        </mat-toolbar>`,
    styles: ['mat-toolbar{ position: relative; z-index: 9; }']
})

export class ToolbarComponent {
    constructor() { }
}