import { Component, OnInit } from '@angular/core';
import AOS from 'aos';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent implements OnInit {
  console = console;
  actualProject: string;

  showTitle: number = -1;
  constructor() {

  }



  ngOnInit(): void {
    AOS.init();
  }

  projects: any[] = [
    {
      'name': 'El Pollo Loco',
      'description': 'A JavaScript-based, object-oriented jump-and-run game, similar to Super Mario.',
      'path': 'https://stefan-herrmann.developerakademie.net/ElPolloLoco',
      'github':'https://github.com/StefanHerrmann1991/El-Pollo-Loco',
      'img': 'assets/img/projects/El Polo Loco.png',
      'language': 'JavaScript'
    },
    {
      'name': 'Join',
      'description': 'A JavaScript-built Kanban board for team project creation.',
      'path': 'http://stefan-herrmann.developerakademie.net/Join/main/00login-register/login.html',
      'github':'https://github.com/StefanHerrmann1991/Join',
      'img': 'assets/img/projects/join.png',
      'language': 'JavaScript'
    }, {
      'name': 'Portfolio',
      'description': 'An Angular-developed portfolio showcasing personal work.',
      'path': 'https://stefan-herrmann.developerakademie.net/stefan-herrmann/',
      'github':'https://github.com/StefanHerrmann1991/portfolio',
      'img': 'assets/img/projects/portfolio.png',
      'language': 'Angular'
    }
    , {
      'name': 'Pokedex',
      'description': 'A JavaScript-implemented Pokedex leveraging REST API.',
      'path': 'https://stefan-herrmann.developerakademie.net/Pokedex',
      'github':'https://github.com/StefanHerrmann1991/Pokedex',
      'img': 'assets/img/projects/pokedex.jpg',
      'language': 'JavaScript'
    }
  ]
  showProjects(project: string) {

    if (project == 'Angular')
      this.actualProject = 'JavaScript';
    if (project == 'JavaScript')
      this.actualProject = 'Angular';
    if (project == 'All')
      this.actualProject = 'All';
    this.console.log(this.actualProject, project);
  }

}


