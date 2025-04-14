import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = 'http://localhost:8080'; // Replace with your API URL
  constructor(private http:HttpClient) { }
  
  getName(): Observable<String> {
    return this.http.get(`${this.baseUrl}/test`, { responseType: 'text' });
  }

  getAbout(): Observable<any> {
    return this.http.get(`${this.baseUrl}/about`);
  }

  getSkills(): Observable<any> {
    return this.http.get(`${this.baseUrl}/skills`);
  }

  // Example: Get list of projects
  getProjects(): Observable<any> {
    return this.http.get(`${this.baseUrl}/projects`);
  }

  // Example: Send contact form data
  sendMessage(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/contacts`, data);
  }
}
