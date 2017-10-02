import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  items;

  constructor() {
    this.items = [
      {
        title: 'Agenda',
        icon: 'view_agenda'
      },
      {
        title: 'Speakers',
        icon: 'people'
      },
      {
        title: 'Location',
        icon: 'location_city'
      }
    ];    
  }


}
