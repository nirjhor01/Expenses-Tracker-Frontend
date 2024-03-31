import { Component, OnInit } from '@angular/core';
import { ExpensetrackerService } from '../../services/expensetracker.service';
import { Tokenss } from '../../models/Tokenss.model';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-totalsum',
  templateUrl: './totalsum.component.html',
  styleUrls: ['./totalsum.component.css']
})
export class TotalsumComponent implements OnInit {

  totalSum: number | undefined;
  userId: number = 0;
  fromDate: Date = new Date();
  toDate: Date = new Date();
  token: Tokenss = {
    accessToken: '',
    refreshToken: ''
  };

  constructor(private expenseTrackerService: ExpensetrackerService, private router: Router) { }

  ngOnInit(): void {
    this.getTotalSum();
  }

  getRefTokens(): Observable<any> {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    console.log('token1 = ' + accessToken, 'token2 = ' + refreshToken);

    if (accessToken && refreshToken) {
      this.token.accessToken = accessToken!;
      this.token.refreshToken = refreshToken!;

      // Return the observable returned by getRefreshToken
      return this.expenseTrackerService.getRefreshToken(this.token).pipe(
        catchError(error => {
          console.error('Error refreshing tokens:', error);
          return of(null); // Return observable with error
        })
      );
    } else {
      // Return an observable with an error if tokens are not found
      return of(null);
    }
  }

  getTotalSum(): void {
    this.getRefTokens().subscribe(
      () => {
        // Tokens are successfully refreshed or retrieved
        // Proceed with the logic to get total sum

        if (!this.userId) {
          console.error('User ID is required.');
          return;
        }

        this.expenseTrackerService.GettotalSum(this.userId, this.fromDate, this.toDate)
          .subscribe({
            next: (sumJson: any) => {
              console.log('OKKK' + sumJson);
              this.totalSum = sumJson.totalSum;
            },
            error: (error: any) => {
              console.error('Error fetching expense percentages:', error);
              // You can provide user feedback here, such as displaying an error message
            }
          });
      },
      (error) => {
        // Error occurred or tokens are not found
        console.error('Error refreshing or retrieving tokens:', error);
        // Navigate to the logout page
        this.router.navigate(['/logout']);
      }
    );
  }
}
