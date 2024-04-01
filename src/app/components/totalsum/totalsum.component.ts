import { Component, OnInit } from '@angular/core';
import { ExpensetrackerService } from '../../services/expensetracker.service';
import { Tokenss } from '../../models/Tokenss.model';
import { Observable, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
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


  
  // Inside your component or service
  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private router: Router,
    private expenseTrackerService: ExpensetrackerService
  ) { }

  ngOnInit(): void {
    this.getTotalSum();
  }

  getRefTokens(): Observable<Tokenss | null> {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    console.log('token1 = ' + accessToken, 'token2 = ' + refreshToken);

    if (accessToken && refreshToken) {
      this.token.accessToken = accessToken!;
      this.token.refreshToken = refreshToken!;
      return this.expenseTrackerService.getRefreshToken(this.token).pipe(
        catchError((error) => {
          this.router.navigateByUrl('/login')
          console.error('Error fetching Token:', error);
          return of(null);
        })
      );
    }
    return of(null);
  }

  getTotalSum(): void {
    this.getRefTokens().pipe(
      switchMap(tokens => {
        if (tokens) {
          localStorage.setItem('accessToken', tokens.accessToken);
          localStorage.setItem('refreshToken', tokens.refreshToken);
          return this.expenseTrackerService.GettotalSum(this.userId, this.fromDate, this.toDate);
        } else {
          return of(null); // Return an empty observable if tokens are not found
        }
      })
    ).subscribe({

      next: (sumJson: any) => {
        if (sumJson != null) {
          console.log('Got the sum:', sumJson.totalSum);
          this.totalSum = sumJson.totalSum;
        } else {
          console.error('Invalid response format:', sumJson);
        }
      },
      error: (error: any) => {
        console.error('Error fetching total sum:', error);
      }

    });
  }
}
