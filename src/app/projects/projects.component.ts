import { Component, OnInit } from '@angular/core';
import AOS from 'aos';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent implements OnInit {

  showTitle: number = -1;
  constructor() {
    
  }

 

  ngOnInit(): void {
    AOS.init();
  }

  projects: any[] = [
    {
      'name': 'El Pollo Loco',
      'path': 'https://stefan-herrmann.developerakademie.net/ElPolloLoco',
      'img': 'assets/img/projects/El Polo Loco.png',
      'language': 'JavaScript'
    },
    {
      'name': 'Join',
      'path': 'https://stefan-herrmann.developerakademie.net/join/index.html',
      'img': 'assets/img/projects/join.png',
      'language': 'JavaScript'
    }, {
      'name': 'Portfolio',
      'path': '',
      'img': 'assets/img/projects/portfolio.jpg',
      'language': 'Angular'
    }
  ]



}


