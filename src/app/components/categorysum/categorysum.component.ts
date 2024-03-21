import { Component, OnInit } from '@angular/core';
import { ExpensetrackerService } from '../../services/expensetracker.service';

@Component({
  selector: 'app-categorysum',
  templateUrl: './categorysum.component.html',
  styleUrl: './categorysum.component.css'
})
export class CategorysumComponent implements OnInit{
  userId  = 0;
  category = '';
  fromdate = new Date;
  todate = new Date;
  categorysum = 0;

  constructor(private expenseTrackerService: ExpensetrackerService) { }

  ngOnInit(): void {
    
  }


  GetcategorySums(): void {
    if (!this.userId) {
      console.error('User ID is required.');
      return;
    }

    this.expenseTrackerService.GetCategorySum(this.userId,this.category,this.fromdate,this.todate).subscribe({
      next: (sumJson: any) => {
        this.categorysum = sumJson?.sum;
        console.log(this.categorysum);
        console.log('sum is = '+sumJson.sum);
      },
      error: (error: any) => {
        console.error('Error fetching sum of any given category:', error);
      }
    });
}
}
