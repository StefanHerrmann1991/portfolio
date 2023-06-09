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

    'text': "I'm Stefan Herrmann, a Front-end Developer driven by a love for coding based in Berlin Germany. During my master's in Life Science Engineering, I discovered the power of algorithms and analytical thinking in solving various challenges."
  }

  ]
}
