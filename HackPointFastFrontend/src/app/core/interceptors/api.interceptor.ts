import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../../environments/environment";

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      url: environment.apiUrl + request.url
    })
    const token = localStorage.getItem('token');
    if (localStorage.getItem('token')) {
      request = request.clone({
          setHeaders: {
            'Authorization': 'Bearer ' + token
          }
        }
      )
    }
    return next.handle(request);
  }
}
