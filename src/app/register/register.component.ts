import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  designations: string[];
  events: string[];
  constructor() { }

  ngOnInit() {
    this.designations = [
      'Student/Trainee engineer',
      'Software Engineer (Web)',
      'Software Engineer (Mobile)',
      'Entrepreneur',
      'Other Profession'
    ];
    this.events = [
      'DevFest Ahmedabad 2016',
      'DevFest Ahmedabad 2015',
      'DevFest Ahmedabad 2014',
      'DevFest Ahmedabad 2013',
      'Women Techmakers: Ahmedabad',
      'Google I/O Extended Ahmedabad',
      'None'
    ]
  }

}
