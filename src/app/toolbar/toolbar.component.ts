import { Component } from '@angular/core';

@Component({
    selector: 'toolbar',
    template: `
        <md-toolbar color="primary" class="mat-elevation-z6">
            <span>DeveFest 2017</span>
        </md-toolbar>`,
    styles: ['md-toolbar{ position: relative; z-index: 9; }']
})

export class ToolbarComponent {
    constructor() { }
}