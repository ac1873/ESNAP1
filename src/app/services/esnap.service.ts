import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http'
import { catchError, map, Observable, throwError } from 'rxjs';
import { ProductsModule } from '../products/products.module';

@Injectable({
  providedIn: 'root'
})
export class EsnapService {

  url = "../../assets/JSON/products.json"

  constructor(private http: HttpClient) { }

  getProductlist(): Observable<any> {
    return this.http.get<any>(this.url).pipe(catchError(this.errorhandler))
  }

  errorhandler(error: HttpErrorResponse) {
    return throwError(() => error.message || 'server error');
  }

  getBooklist(value: any) {

    const url = 'https://www.googleapis.com/books/v1/volumes'
    let queryParams = new HttpParams();
    queryParams = queryParams.append('q', value);

    return this.http.get(url, { params: queryParams })
      .pipe(
        map((result) => {
          return result;
        }),
        catchError((error) => {
          console.error(error)
          return throwError(() => new Error('Error'))
        })
      );



  }


  getAllBooks(): Observable<any> {
    return this.http.get('https://www.googleapis.com/auth/books')
  }

}
