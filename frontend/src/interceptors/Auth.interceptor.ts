import { Injectable } from '@angular/core'
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent
} from '@angular/common/http'
import { Observable } from 'rxjs'
import AuthService from 'src/services/auth.service'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) { }

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        console.log("intercept")
        const authToken = this.authService.getAuthToken()
        const authRequest = request.clone({
            setHeaders: {
                Authorization: `Bearer ${authToken}`
            }
        })

        return next.handle(authRequest)
    }
}