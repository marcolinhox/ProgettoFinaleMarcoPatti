import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  tenantID = 'fe_0621';
  bearerToken = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY0NzY5NDE0MSwiZXhwIjoxNjQ4NTU4MTQxfQ.Wfrb-g6y5sE53qG0glnMLHbtnagOGwZ5HF11xFvPKU8hy4nxvim90lIfkBjE145mz3IwCxYw1Dda271Yavv5Eg';
  constructor() {}
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    let myRequest: HttpRequest<any> = request;
    myRequest = request.clone(
      {headers: request.headers.set("Authorization", this.bearerToken)
                               .set("X-TENANT-ID", this.tenantID)
    }
    )
    
    return next.handle(myRequest);
  }
}
