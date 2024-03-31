import { Component, OnInit } from '@angular/core';
import { ExpensetrackerService } from '../../services/expensetracker.service';
import { Router } from 'express';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit{
      refreshToken:string | undefined;
      ngOnInit(): void {
        
      }
      constructor(private expenseTrackerService: ExpensetrackerService, private router: Router) {}

      UserLogoutt(){
        this.expenseTrackerService.UserLogout();
      }
}
