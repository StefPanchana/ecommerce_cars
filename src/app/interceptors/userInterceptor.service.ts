import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserInterceptorService implements HttpInterceptor{

user: string = "stef.panchana";
parameter: string = "user-request";

constructor() { }

intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  let cloneHttp = req.clone({
    headers: req.headers.append(this.parameter, this.user)
  });
  return next.handle(cloneHttp);
}

}
