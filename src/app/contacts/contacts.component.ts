import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-contacts',
  standalone: false,
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {

  constructor(private dataService : DataService){}

  onSubmit(form: any) {
    console.log('Form submitted!');
    if (form.valid) {
      this.dataService.sendMessage(form.value).subscribe(response => {
        console.log('Message sent!', response);
      });
    }
  }
}
