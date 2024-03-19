import { Component, OnDestroy, OnInit } from '@angular/core';
import { Expenditure } from '../../models/expenditure.model';
import { Subscription } from 'rxjs';
import { ExpensetrackerService } from '../../services/expensetracker.service';

@Component({
  selector: 'app-expenditure',
  templateUrl: './expenditure.component.html',
  styleUrl: './expenditure.component.css'
})
export class ExpenditureComponent implements OnInit, OnDestroy {
  userId: number | undefined;
  expenditure: Expenditure[] = [];
  private subscription: Subscription | undefined;

  constructor(private expenseTrackerService: ExpensetrackerService) { }

   ngOnInit(): void {
    this.userId = this.userId;
   }

   GetAllExpenditure(): void {
    if (!this.userId) {
      console.error('User ID is required.');
      return;
    }

    this.subscription = this.expenseTrackerService.GetAllExpenditure(this.userId).subscribe({
      next: (expenditures: Expenditure[]) => {
        console.log(expenditures);
        this.expenditure = expenditures;
      },
      error: (error: any) => {
        console.error('Error fetching data:', error);
        // You can provide user feedback here, such as displaying an error message
      }
    });
  }
  ngOnDestroy(): void {
    // Unsubscribe from the subscription to prevent memory leaks
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}

