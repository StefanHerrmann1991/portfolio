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
      'img': 'assets/img/projects/portfolio.png',
      'language': 'Angular'
    }
    , {
      'name': 'Pokedex',
      'path': 'https://stefan-herrmann.developerakademie.net/Pokedex',
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


