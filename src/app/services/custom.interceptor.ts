// import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class customInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Log the request
  //   console.log('Request sent:', req);

  //   // Continue handling the request
  //   return next.handle(req).pipe(
  //     tap((event: HttpEvent<any>) => {
  //       if (event instanceof HttpResponse) {
  //         // Log the response
  //         console.log('Response received:', event);
  //       }
  //     }),
  //     catchError((error: HttpErrorResponse) => {
  //       // Log any errors
  //       console.error('Error occurred:', error);
  //       return of(error);
  //     })
  //   );
  // }
  const token = localStorage.getItem('accessToken');
  const newCloneRequest = req.clone({
    setHeaders:{
      Authorization:`Bearer ${token}`
    }

  })
  
  return next.handle(newCloneRequest);
}
}
