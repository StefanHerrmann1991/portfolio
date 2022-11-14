import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  socialLogos = [{
    'logo': 'assets/img/icons/github.png',
    'url': 'https://github.com/StefanHerrmann1991?tab=overview&from=2022-04-01&to=2022-04-30'
  },
  {
    'logo': 'assets/img/icons/linkedin-box-fill.png',
    'url': 'https://www.linkedin.com/in/stefan-herrmann-a564451b3/'
  },
  {
    'logo': 'assets/img/icons/xing-fill.png',
    'url': 'https://www.xing.com/profile/Stefan_Herrmann132/cv'
  },]

}
