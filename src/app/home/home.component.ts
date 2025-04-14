import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  name = "";
  constructor(private dataService: DataService){}

  ngOnInit(): void{
    this.dataService.getName().subscribe((data: any) => {
      this.name = data;
    });
  }
}
