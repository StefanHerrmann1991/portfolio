import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.sass']
})
export class JourneyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {    
      AOS.init();
    
   
  }

  journeys = [{
    'img': 'walk-line',
    'title': 'I STARTED',
    'text': 'programming during my master. When I studied Life Science Engineering I learned how to think analytical and structured. Often I thought that most problems could be solved much better with algorithms.'
  }, {
    'img': 'search-line',
    'title': 'MY RESEARCH',
    'text': 'was mostly about explosives, cellculture and immunological testing. The best part for me was sitting in front of the pc and the statistical evaluation and discussion of my data.'
  }, {
    'img': 'heart-line',
    'title': 'THE FASCINATION',
    'text': 'for tech was always a part of my life. When friends have technical problems I am the person to solve it.'
  }, {
    'img': 'flight-takeoff-line',
    'title': 'MY JOURNEY',
    'text': 'after starting to code by myself I dicided to enroll at the Developer Akademie. I wanted to create high quality code, reviewed by professionel developers. Coding combines every aspect I like about researching but its way faster.'
  }]


}
