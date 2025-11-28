import { Injectable } from '@angular/core';
import { 
  HttpInterceptor, 
  HttpHandler, 
  HttpRequest, 
  HttpEvent, 
  HttpErrorResponse 
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = sessionStorage.getItem('token');
    //console.log("Token récupéré:", token);

    // Clonage unique des requêtes avec tous les headers nécessaires
    if (token) {
      req = req.clone({
        setHeaders: {
          'Authorization': `Bearer ${token}`
        }
      });
    } 

    // Gestion des erreurs
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          console.log("Erreur 401 Unauthorized - Token invalide ou expiré");
          // (optionnel) redirection vers la page de login :
          // this.router.navigate(['/login']);
        }
        return throwError(() => error);
      })
    );
  }
}