import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import { DisplayService } from '../display.service';

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.sass']
})
export class JourneyComponent implements OnInit {

  constructor(public displayService: DisplayService) { }

  ngOnInit(): void {
    AOS.init();
  }

  journeys = [{
    'text': "I'm Stefan Herrmann, a Front-end Developer with a Master in Life Science Engineering. I developed an analytical and structured mindset, realizing the potential of algorithms in solving problems. Focused on explosives, cell culture, and immunological testing, I thrived in data analysis and statistical discussions on the computer. I joined the Developer Akademie for professional guidance and to create high-quality code, combining the best of research with greater speed."
  }

  ]
}
