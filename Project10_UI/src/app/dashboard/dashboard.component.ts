import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  isLogin(): boolean {
    const firstName = localStorage.getItem('fname');
    return firstName !== 'null' && firstName !== null && firstName !== undefined;
  }

  getRole(): string {
    return (localStorage.getItem('role') || '').trim().toLowerCase();
  }

  canAccess(moduleName: string): boolean {
    const role = this.getRole();

    if (role === 'admin') {
      return true;
    }

    if (role === 'college') {
      return ['college', 'student', 'marksheet', 'course', 'subject', 'timetable', 'faculty']
        .includes(moduleName);
    }

    if (role === 'student') {
      return ['subject', 'marksheet', 'timetable']
        .includes(moduleName);
    }
    
    return false;
  }
}
