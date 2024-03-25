import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpensetrackerService } from '../../services/expensetracker.service';
import { Subscription } from 'rxjs';
import { Login } from '../../models/login.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  user: Login = {
    UserName: '',
    Password: '',
    Id:0
    
  };
  registrationSuccess: boolean | undefined;
  
 
  ngOnInit(): void {
    
  }

  constructor(private expenseTrackerService: ExpensetrackerService, private router: Router) {}



  login() {
    this.expenseTrackerService.loginUser(this.user).subscribe(
      (response) => {
        // Check if the response status is 200
        this.router.navigateByUrl('/home-info');
        if (response.accessToken && response.refreshToken) {
          this.registrationSuccess = true;
          Swal.fire({
            icon: 'success',
            title: 'Login Successful',
            text: 'User LoggedIn successfully!',
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Login Failed',
            text: 'Failed to Login!',
          });
        }
      },
      (error: any) => { // Explicitly define the type of 'error'
        console.error('Error occurred while login:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'An error occurred while login!',
        });
      }
    );
  }
  
}

