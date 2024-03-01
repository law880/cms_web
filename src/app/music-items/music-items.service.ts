import { Injectable } from '@angular/core';
import { FullMusicItemDto, CreateMusicItemDto } from './music-item.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { environment } from '../environments/environment.localhost'

@Injectable({
  providedIn: 'root'
})
export class MusicItemsService {
  private musicItemsUrl = "/musicitems"
  constructor(
    private http: HttpClient
  ) { }

  // This method sends a POST request to the API to create a music item, 
  // returns the newly created record, including its ID
  public create(musicItem: CreateMusicItemDto): Observable<FullMusicItemDto> {
    return this.http.post<FullMusicItemDto>('api' + this.musicItemsUrl, musicItem)
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
