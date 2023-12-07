import { Component, OnInit, ElementRef, Renderer2, HostListener } from '@angular/core';
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

  constructor(public displayService: DisplayService, private el: ElementRef) { }

  ngOnInit(): void {
    AOS.init();
    // Initialize isHovering for each project
    this.projects.forEach((_, index) => {
      this.isHovering[index] = false;
    });
  }


  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (window.innerWidth <= 768) {
      const tags = this.el.nativeElement.querySelectorAll('.project-number');
      tags.forEach((tag, index) => {
        if (this.isInViewport(tag)) this.isHovering[index] = true;
        else this.isHovering[index] = false;
      });
    }
  }


  isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }


  projects: any[] = [
    {
      'name': 'El Pollo Loco',
      'description': 'A JavaScript-based, object-oriented jump-and-run game. Help Pepe to rescue his wife from the bad chickens.',
      'path': 'https://stefan-herrmann.developerakademie.net/ElPolloLoco',
      'github': 'https://github.com/StefanHerrmann1991/El-Pollo-Loco',
      'img': 'assets/img/projects/el-pollo-loco.png',
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
    , {
      'name': 'Pokedex',
      'description': 'A JavaScript-implemented Pokedex leveraging REST API.',
      'path': 'https://stefan-herrmann.developerakademie.net/Pokedex',
      'github': 'https://github.com/StefanHerrmann1991/Pokedex',
      'img': 'assets/img/projects/pokedex.jpg',
      'technologies': 'JavaScript | HTML | SASS | Api'
    },
    {'name': 'DA-Bubble',
    'description': 'An Angular based Slack-Clone.',
    'path': 'https://dabubble-708.developerakademie.net/angular-projects/da-bubble/login',
    'github': 'https://github.com/StefanHerrmann1991/DA-Bubble',
    'img': 'assets/img/projects/da-bubble.png',
    'technologies': 'Angular | Firebase | SCSS | Angular Material'}
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


