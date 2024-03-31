import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Percentage } from '../models/expensetracker.model';
import { Expenditure } from '../models/expenditure.model';
import { Registration } from '../models/registration.model';
import { Login } from '../models/login.model';
import { Tokenss } from '../models/Tokenss.model';

@Injectable({
  providedIn: 'root'
})
export class ExpensetrackerService {
  private refreshToken: string | null = null;
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


  


  



  GettotalSum(userId: number, fromDate: Date, toDate:Date): Observable<any> {
    return this.http.get<any>(`${this.baseApiUrl}/api/User/GetTotalSum?UserId=${userId}&fromDate=${fromDate}&toDate=${toDate}`).pipe(
      map((response: any) => {
        console.log('response from service='+response);
        return response;
      })
    );
  }

  GetCategorySum(userId:number, category: string,fromDate: Date, toDate:Date ): Observable<any>{
    return this.http.get<any>(`${this.baseApiUrl}/api/User/categorySum?UserId=${userId}&Category=${category}&FromDate=${fromDate}&ToDate=${toDate}`).pipe(
      map((response: any) => {
        console.log('responses message = '+ response.sum);
        
       return {
        info: response.info,
        sum: response.sum
        };
        
      }) 
    );
  }
  
  registerUser(user: Registration): Observable<any> {
    // Send the user registration data to the server
    return this.http.post<any>(`${this.baseApiUrl}/api/Auth/Register`, user);
  }

  loginUser(data: Login): Observable<any> {
    //const data = { userName, password };
    console.log("Generating Token");
    return this.http.post<any>(`${this.baseApiUrl}/api/Auth/LogIn`, data);
  }


  UserLogout(){
    this.refreshToken = null;
  }

  getRefreshToken(token: Tokenss): Observable<any> {
    return this.http.post<any>(`${this.baseApiUrl}/api/Auth/refresh-token`, token).pipe(
      tap((response: any) => console.log(response)) // Log the response
    );
  }
  
  


  
}


