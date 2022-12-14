import { Component, Input, OnInit } from '@angular/core';
import AOS from 'aos';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.sass']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

  skills: any[] = [
    {
      'name': 'CSS / HTML',
      'icon': 'htmlCss'
    }
    , {
      'name': 'JavaScript',
      'icon': 'js'
    }
    , {
      'name': 'Angular',
      'icon': 'angular'
    }
    , {
      'name': 'SCRUM',
      'icon': 'scrum'
    }
    , {
      'name': 'Git',
      'icon': 'git'
    }
    , {
      'name': 'RestAPI',
      'icon': 'api'
    }
    , {
      'name': 'Design Thinking',
      'icon': 'designThinking'
    }
    , {
      'name': 'Database',
      'icon': 'database'
    }
  ]




}
