import { Component, OnInit } from '@angular/core';
import { ExpensetrackerService } from '../../services/expensetracker.service';

@Component({
  selector: 'app-totalsum',
  templateUrl: './totalsum.component.html',
  styleUrl: './totalsum.component.css'
})
export class TotalsumComponent implements OnInit {

  totalSum: number | undefined;
  userId:number = 0;
  fromDate:Date = new Date;
  toDate:Date = new Date;

  constructor(private expenseTrackerService: ExpensetrackerService) { }
  ngOnInit(): void {
  }

  getTotalSum(): void {
    if (!this.userId) {
      console.error('User ID is required.');
      return;
    }

    this.expenseTrackerService.GettotalSum(this.userId,this.fromDate,this.toDate).subscribe({
      next: (sumJson: any) => {
        console.log('OKKK'+sumJson);
        this.totalSum = sumJson.totalSum;
      },
      error: (error: any) => {
        console.error('Error fetching expense percentages:', error);
        // You can provide user feedback here, such as displaying an error message
      }
    });
  }

  
  


}
