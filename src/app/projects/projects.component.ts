import { Component } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: any[] = [];
  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.dataService.getProjects().subscribe((data) => {
      this.projects = data;
    })
  }
  // projects = [
  //   {
  //     name: 'Portfolio Website',
  //     type: 'Personal',
  //     description: 'A responsive Angular portfolio using Material Design.',
  //     image: 'https://via.placeholder.com/300x200',
  //     link: 'https://github.com/yourusername/portfolio'
  //   },
  //   {
  //     name: 'E-commerce App',
  //     type: 'Client',
  //     description: 'A full-stack shopping app with Angular and Firebase.',
  //     image: 'https://via.placeholder.com/300x200',
  //     link: 'https://github.com/yourusername/ecommerce'
  //   },
  //   {
  //     name: 'Task Manager',
  //     type: 'Open Source',
  //     description: 'A sleek task app built using Angular and NgRx.',
  //     image: 'https://via.placeholder.com/300x200',
  //     link: 'https://github.com/yourusername/task-manager'
  //   }
  // ];
}
