import { Injectable } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpRequest,
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SetInterceptorService {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const clonedReq = this.handleRequest(req);
    return next.handle(clonedReq);
  }
  handleRequest(req: HttpRequest<any>) {
    const user = localStorage.getItem("accessToken");
    let authReq;
    if (
      (req.method.toLowerCase() === "post" ||
        req.method.toLowerCase() === "put") &&
      req.body instanceof FormData
    ) {
      authReq = req.clone({
        headers: new HttpHeaders({
          Authorization: user ? user : "",
          "cache-control": "no-cache",
        }),
      });
    } else {
      authReq = req.clone({
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          Authorization: user ? user : "",
          "cache-control": "no-cache",
        }),
      });
    }
    return authReq;
  }
}
