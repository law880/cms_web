import { Injectable } from '@angular/core';
import { MusicItem } from './music-item.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicItemsService {

  constructor(
    private http: HttpClient
  ) { }

  // This method sends a POST request to the API to create a music item, 
  // returns the newly created record, including its ID
  public create(musicItem: MusicItem): Observable<MusicItem> {
    return this.http.post<MusicItem>("", {musicItem})
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }
  
  public handleError(error: HttpErrorResponse) {
    if(error.status === 0) {
      //client-side or network error occurred
      console.error('An error occurred: ', error.error);
    } else {
      // API has returmed an unsuccessful response code
      console.error(`API returned code ${error.status}, body was: ${error.error} `);
    }
    //return observable with user facing message
    return throwError(() => new Error('Something went wrong, please try again later.'));
  }
}
