import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
// import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/';
import { of } from 'rxjs/';
import { catchError, map, tap } from 'rxjs/operators';
import { IPhoneBookItem } from '../models/iphone-book-item';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

@Injectable({
  providedIn: 'root'
})
export class PhoneBookService {

  private mockDataUrl = 'api/phoneBookData';

  constructor(private http: HttpClient) { }

  public getPhoneBookData(): Observable<IPhoneBookItem[]> {
    return this.http.get<IPhoneBookItem[]>(this.mockDataUrl).pipe(
      catchError(this.handleError('getPhoneBookData', []))
    );
  }

  //TODO - change error handling as required!
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }

}
