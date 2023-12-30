import { Component } from '@angular/core';
import { DisplayService } from './display.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'stefan-herrmann';
  isLegalNoticeRoute = false;


  constructor(public displayService: DisplayService, private router: Router) { }


  ngOnInit() {
    this.router.events.subscribe((event) => {
      this.isLegalNoticeRoute = this.router.url === '/legal-notice';
    });
  }

  toggleContent() {
    this.displayService.toggleContent();    
  }

}
