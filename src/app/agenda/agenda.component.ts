import { Component } from '@angular/core';

@Component({
    selector: 'agenda',
    templateUrl: 'agenda.component.html',
    styles: ['md-toolbar{ position: relative; z-index: 9; }']
})

export class AgendaComponent {
    agenda: any;
    constructor() {
        this.agenda = [
            '9.30 am onwards - Registration ',
            '10.00 - 10.45 am - Keynote by Akhil Gupta (Founder, Nobroker.com)',
            '10.45 - 11.30 am -Talent in the New Age ...Behavioral Insight by Shubhalaxmi Acharya (Founder, Mind Element)',
            '11.30 - 12.15 pm -Digital program and Inspirational talk for women by Rashmi Tambe (Head - Digital Program Management)',
            '12.15 - 1.00 pm -Machine Learning scope and future by Gauri Shah (Head of ML team at Persistent)',
            '1.00 - 1.30 pm - Lunch & Networking',
            '1.30 - 2.15 pm - Kotlin Insights by Akshay Chordiya and Hardik Trivedi',
            '2.15 - 2.45 pm - Basics of Funding by Anuradha Kulkarni (Founder, FoundHound)',
            '2.45 - 3.30 pm - Data Science by Dr Satish Patil (Founder at Lemoxo)',
            '3.30 - 3.45 pm - Tea break',
            '3.45 - 4.30 pm - Angular 4 by Hardik Prithva (Developer, Larsen & Toubro Infotech Ltd)',
            '4.30 - 5.00 pm - Concluding Session by Paul Ravindranath (Program Manager, Google India)',
        ]
    }
}