import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Percentage } from '../models/expensetracker.model';
import { Expenditure } from '../models/expenditure.model';

@Injectable({
  providedIn: 'root'
})
export class ExpensetrackerService {
  baseApiUrl: string ="https://localhost:44326";
  constructor(private http: HttpClient) { }
  
  GetPercentage(id: number): Observable<Percentage[]> {
    return this.http.get<any>(`${this.baseApiUrl}/api/User/ExpensePercentage?UserId=${id}`).pipe(
      map((response: any) => {
        // Extract the info array from the response
        const infoArray = response.info;

        // Map each item in the info array to the Percentage model
        return infoArray.map((item: any) => {
          return {
            Category: item.category,
            Percentage: item.percentage
          } as Percentage;
        });
      })
    );
  }

    
  GetAllExpenditure(id: number): Observable<Expenditure[]> {
    return this.http.get<any>(`${this.baseApiUrl}/api/User/search?UserId=${id}`).pipe(
      map((response: any) => {
        // Extract the msg array from the response
        const msgArray = response.msg;

        // Map each item in the msg array to the Expenditure model
        return msgArray.map((item: any) => {
          return {
            Id: item.id,
            UserId: item.userId,
            Category: item.category,
            Amount: item.amount,
            DateTimeColumn: new Date(item.dateTimeInfo), // Convert dateTimeInfo to Date object
            Note: item.note
          } as Expenditure;
        });
      })
    );
  }
  


}
