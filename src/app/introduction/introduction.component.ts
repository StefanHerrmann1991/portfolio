import { Component, OnInit } from '@angular/core';
import { DisplayService } from '../display.service';
@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.sass']
})
export class IntroductionComponent implements OnInit {

  constructor(public displayService: DisplayService) { }
  ngOnInit(): void {
  }

  toggleContent() {
    this.displayService.toggleContent();
  }
}
