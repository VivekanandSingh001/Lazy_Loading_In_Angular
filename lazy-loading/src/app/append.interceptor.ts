import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, finalize, map, throwError } from 'rxjs';

@Injectable()
export class AppendInterceptor implements HttpInterceptor {
  myBooleanVariable: any;

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
     const storedValue = localStorage.getItem('userName');
     this.myBooleanVariable = storedValue ? JSON.parse(storedValue) : false;
     const APIiii=this.myBooleanVariable;
    request = request.clone({
      headers: request.headers.append('API_key', 'uwbsyhwbsaswuw_01_sjxsjs.0122_9jdwhdjw'),
      setHeaders:{
        APIiii,
      }
    }
    )
    return next.handle(request).pipe(
      map((event:HttpEvent<any>) => {
        if(event instanceof HttpResponse){
          return event;
        }
        return event;
      }
      ),catchError((error:HttpErrorResponse | Error)=>{
        let errorMessage:string;
        if(error instanceof HttpErrorResponse){
          if(error.status===401){
            errorMessage ='Un Authorized Access';
          }else if(error.status===404){
            errorMessage='Not found';
          }else {
            errorMessage = 'Server error';
          }
        }else{
          errorMessage = 'Client error';
        }
        return  throwError(errorMessage)
      }),finalize(() => {
      })
);
  }
  
}
