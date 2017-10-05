import { Component } from '@angular/core';

@Component({
    selector: 'speakers',
    templateUrl: 'speakers.component.html',
    styleUrls: ['speakers.component.scss']
})

export class SpeakersComponent {
    speakers: any;
    constructor() {
        this.speakers = [
            {
                "name": "Paul Ravindranath",
                "designation": "Program Manager",
                "company": "Google",
                "topic": "Session Conclusion"
            },
            {
                "name": "Akhil Gupta",
                "designation": "Founder",
                "company": "Nobroker.com",
                "topic": "Keynote"
            },
            {
                "name": "Subhalaxmi Acharya",
                "designation": "Founder",
                "company": "Mind Element",
                "topic": "Talent in the New Age ...Behavioral Insight"
            },
            {
                "name": "Rashmi Tambe",
                "designation": "Head - Digital Program Management",
                "company": "Mind Element",
                "topic": "Digital program and Inspirational talk for women"
            },
            {
                "name": "Gauri Shah",
                "designation": "Head of ML",
                "company": "Persistent",
                "topic": "Machine Learning scope and future"
            },
            {
                "name": "Hardik Trivedi",
                "designation": "Android Developer",
                "company": "",
                "topic": "Kotlin Insights"
            },
            {
                "name": "Dr. Satish Patil",
                "designation": "Founder",
                "company": "Lemoxo",
                "topic": "Data Science"
            },
            {
                "name": "Anuradha Kulkarni",
                "designation": "Founder",
                "company": "FoundHound",
                "topic": "Basics of Funding"
            },
            {
                "name": "Hardik Pithva",
                "designation": "Developer",
                "company": "L&T Infotech",
                "topic": "Materializing Angular"
            }
        ];
    }
}