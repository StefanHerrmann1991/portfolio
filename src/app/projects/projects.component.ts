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

  project: any[] = [
    {
      'name': 'El Pollo Loco',
      'path': 'htmlCss',
      'img': '',
      'language': 'JavaScript'
    },
    {
      'name': 'Join',
      'path': 'htmlCss',
      'img': '',
      'language': 'JavaScript'
    }]
}
