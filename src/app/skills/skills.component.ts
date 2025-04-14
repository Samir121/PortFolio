import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-skills',
  standalone: false,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills : any[] = [];
  constructor(private dataService : DataService){

  }

  ngOnInit(): void{
    this.dataService.getSkills().subscribe((data)=> {
      this.skills = data;
    })
  }
  // skills = [
  //   { name: 'Angular', level: 90, icon: 'code' },
  //   { name: 'JavaScript', level: 85, icon: 'developer_mode' },
  //   { name: 'HTML & CSS', level: 95, icon: 'language' },
  //   { name: 'TypeScript', level: 80, icon: 'integration_instructions' },
  //   { name: 'Node.js', level: 75, icon: 'cloud' },
  //   { name: 'UI/UX Design', level: 70, icon: 'brush' }
  // ];
}
