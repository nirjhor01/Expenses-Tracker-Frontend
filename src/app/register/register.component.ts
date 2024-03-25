import { Component, OnInit } from '@angular/core';
import { ExpensetrackerService } from '../services/expensetracker.service';
import { Registration } from '../models/registration.model';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: Registration = {
    id: 0,
    userName: '',
    password: '',
    email: '',
    role: ''
  };
  registrationSuccess: boolean = false;

  constructor(private expenseTrackerService: ExpensetrackerService, private router: Router) { }

  ngOnInit(): void {
  }

  registerUser() {
    this.expenseTrackerService.registerUser(this.user).subscribe(
      (response) => {
        // Check if the response status is 200
        this.router.navigateByUrl('/login');
        if (response != null) {
          this.registrationSuccess = true;
          Swal.fire({
            icon: 'success',
            title: 'Registration Successful',
            text: 'User registered successfully!',
          });
          

        } else {
          Swal.fire({
            icon: 'error',
            title: 'Registration Failed',
            text: 'Failed to register user!',
          });
        }
      },
      (error) => {
        console.error('Error occurred while registering user:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'An error occurred while registering user!',
        });
      }
    );
  }

}
