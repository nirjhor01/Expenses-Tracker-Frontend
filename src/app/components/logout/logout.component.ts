import { Component, OnInit } from '@angular/core';
import { ExpensetrackerService } from '../../services/expensetracker.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit {
  ngOnInit(): void {
    
  }

  constructor(private expenseTrackerService: ExpensetrackerService, private router: Router) {}

  logout(): void {
    // Call the logout method from AuthService
    this.expenseTrackerService.UserLogout();

    // Redirect to the login page (assuming your login page URL is '/login')
    this.router.navigate(['/login']);
  }

}
