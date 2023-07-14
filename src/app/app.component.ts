import { Component } from '@angular/core';
import { DisplayService } from './display.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'stefan-herrmann';


  constructor(public displayService: DisplayService) { }

  toggleContent() {
    this.displayService.toggleContent();    
  }

}
