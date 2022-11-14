import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
    }]
}


