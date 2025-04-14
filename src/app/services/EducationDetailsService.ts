import { Injectable } from '@angular/core';
import { EducationDetailDTO } from '../model/educationDetal-dto';

@Injectable({
  providedIn: 'root'
})
export class EducationDetailsService {
  private educationDetails: EducationDetailDTO[] = [];

  constructor() {}

  // Add a new education detail
  addEducationDetail(detail: EducationDetailDTO): void {
    this.educationDetails.push(detail);
  }

  // Get all education details
  getEducationDetails(): EducationDetailDTO[] {
    return this.educationDetails;
  }

  // Clear all education details
  clearEducationDetails(): void {
    this.educationDetails = [];
  }
}