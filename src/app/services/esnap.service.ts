import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { catchError, Observable, throwError } from 'rxjs';
import { ProductsModule } from '../products/products.module';

@Injectable({
  providedIn: 'root'
})
export class EsnapService {

  url = "../../assets/JSON/products.json"

  constructor(private http: HttpClient) { }

  getProductlist(): Observable<ProductsModule[]> {
    return this.http.get<ProductsModule[]>(this.url).pipe(catchError(this.errorhandler))
  }

  errorhandler(error: HttpErrorResponse) {
    return throwError(() => error.message || 'server error');
  }

}
