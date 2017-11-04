import { Component } from '@angular/core';

@Component({
    selector: 'agenda',
    templateUrl: 'agenda.component.html',
})

export class AgendaComponent {
    agenda: any;
    constructor() {
        this.agenda = {
            amd: [
                '09:00 - 09:45 Registration & morning Coffee',
                '09:45 - 10:45 The Keynote',
                '10:45 - 11:00 Mobile/Web Separation break',
                '11:00 -12:00 Introduction to Kotlin for Android App Development',
                '12:00 - 13:00 Pragmatic Kotlin on Android',
                '13:00 - 14:00 Lunch break',
                '14:00 - 15:00 Production Level Test Driven Development and What\'s new',
                '15:00 - 16:00 Generating efficient apk by reducing size and improving performance',
                '16:00 - 17:00 Generating efficient apk by reducing size and improving performance',
                '16:00 - 16:15 Coffee break',
                '16:15 - 17:15 A (K)night with Dagger - Slicing problems of newbies',
                '17:15 - 18:15 Building fantastic x platform apps with flutter',
                '18:15 - 18:45 Conference closing and Swags'
            ],
            pune:
                [
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
}