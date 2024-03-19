import { Component, OnInit, OnDestroy } from '@angular/core';
import { ExpensetrackerService } from '../../services/expensetracker.service';
import { Percentage } from '../../models/expensetracker.model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-percentage',
  templateUrl: './percentage.component.html',
  styleUrls: ['./percentage.component.css']
})
export class PercentageComponent implements OnInit, OnDestroy {
  userId: number | undefined;
  expensePercentages: Percentage[] | undefined;
  private subscription: Subscription | undefined;
  constructor(private expenseTrackerService: ExpensetrackerService) { }

  

  ngOnInit(): void {
    // Initialize userId to undefined
    this.userId = undefined;
  }

  getExpensePercentages(): void {
    if (!this.userId) {
      console.error('User ID is required.');
      return;
    }

    this.subscription = this.expenseTrackerService.GetPercentage(this.userId).subscribe({
      next: (percentages: Percentage[]) => {
        console.log(percentages);
        this.expensePercentages = percentages;
      },
      error: (error: any) => {
        console.error('Error fetching expense percentages:', error);
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
