import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-education',
  standalone: false,
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  educationList: any[] = [];
  constructor(private dataService: DataService){}

  ngOnInit(): void{
    this.dataService.getAbout().subscribe((data: any) => {
      this.educationList = data;
      console.log('Clicked education item:', this.educationList);
      
    });
    

  }
  onClick(education: any): void {
   this.ngOnInit()
    console.log('Clicked education item:', this.educationList);
    // Add additional logic here if needed
  }
  // educationList = [
  //   {
  //     degree: 'B.Tech in Computer Science',
  //     institution: 'ABC Institute of Technology',
  //     duration: '2015 – 2019',
  //     location: 'Chennai, India',
  //     description: 'Focused on software engineering, algorithms, and web development.'
  //   },
  //   {
  //     degree: 'Higher Secondary Education',
  //     institution: 'XYZ Senior Secondary School',
  //     duration: '2013 – 2015',
  //     location: 'Sitamarhi, Bihar',
  //     description: 'Specialized in Mathematics and Computer Science.'
  //   },
  //   {
  //     degree: 'Secondary School Certificate',
  //     institution: 'Little Flower School',
  //     duration: '2011 – 2013',
  //     location: 'Sitamarhi, Bihar',
  //     description: 'General studies with a focus on Science and English.'
  //   }
  // ];
}
