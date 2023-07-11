import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import { DisplayService } from '../display.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent implements OnInit {
  console = console;
  actualProject: string;
  isHovering: { [key: number]: boolean } = {};
  showTitle: number = -1;

  constructor(public displayService: DisplayService) { }


  ngOnInit(): void {
    AOS.init();
  }

  projects: any[] = [
    {
      'name': 'El Pollo Loco',
      'description': 'A JavaScript-based, object-oriented jump-and-run game. Help Pepe to rescue his wife from the bad chickens.',
      'path': 'https://stefan-herrmann.developerakademie.net/ElPolloLoco',
      'github': 'https://github.com/StefanHerrmann1991/El-Pollo-Loco',
      'img': 'assets/img/projects/El Polo Loco.png',
      'technologies': 'JavaScript | HTML | CSS'
    },
    {
      'name': 'Join',
      'description': 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      'path': 'http://stefan-herrmann.developerakademie.net/Join/main/00login-register/login.html',
      'github': 'https://github.com/StefanHerrmann1991/Join',
      'img': 'assets/img/projects/join.png',
      'technologies': 'JavaScript | HTML | SASS'
    }, {
      'name': 'Portfolio',
      'description': 'An Angular-developed portfolio showcasing personal work.',
      'path': 'https://stefan-herrmann.developerakademie.net/stefan-herrmann/',
      'github': 'https://github.com/StefanHerrmann1991/portfolio',
      'img': 'assets/img/projects/portfolio.png',
      'technologies': 'Angular | TypeScript | SASS'
    }
    ,/*  {
      'name': 'Pokedex',
      'description': 'A JavaScript-implemented Pokedex leveraging REST API.',
      'path': 'https://stefan-herrmann.developerakademie.net/Pokedex',
      'github':'https://github.com/StefanHerrmann1991/Pokedex',
      'img': 'assets/img/projects/pokedex.jpg',      
      'technologies': 'JavaScript | HTML | SASS | Api'
    } */
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


