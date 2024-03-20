import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ExpensetrackerService } from '../../services/expensetracker.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginError: string = '';
  loginSuccess: string = '';
  loginSubscription: Subscription | undefined;

  constructor(private expenseTrackerService: ExpensetrackerService, private router: Router) {}

  login(): void {
    this.expenseTrackerService.logIn(this.username, this.password).subscribe({
      next: (res: any) => {
        this.loginSuccess = "Login Successful";
        console.log('response from component='+res);
      },
      error: (error: any) => {
        console.error('Error fetching data:', error);
        // You can provide user feedback here, such as displaying an error message
      }
    });

  }

  ngOnDestroy(): void {
    // Unsubscribe from the login observable to prevent memory leaks
    if (this.loginSubscription) {
      this.loginSubscription.unsubscribe();
    }
  }
}
function login() {
  throw new Error('Function not implemented.');
}

