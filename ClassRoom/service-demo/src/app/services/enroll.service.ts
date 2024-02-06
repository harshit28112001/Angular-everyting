import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EnrollService {
  constructor() {}

  onEnrollClick(title: string) {
    alert('thank you for enrolling to the course' + title);
  }
}
