import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserInterceptorService implements HttpInterceptor{

username: string = "stef.panchana";
password: string = "user-request";

constructor() { }

intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  let cloneHttp = req.clone({
    headers: req.headers.append(this.username, this.password)
  });
  return next.handle(cloneHttp);
}

}
