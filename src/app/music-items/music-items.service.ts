import { Injectable } from '@angular/core';
import { FullMusicItemDto, CreateMusicItemDto } from './music-item.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicItemsService {
  private musicItemsUrl = "api/musicitems"
  constructor(
    private http: HttpClient
  ) { }

  // This method sends a POST request to the API to create a music item, 
  // returns the newly created record, including its ID
  public create(musicItem: CreateMusicItemDto): Observable<FullMusicItemDto> {
    return this.http.post<FullMusicItemDto>(this.musicItemsUrl, musicItem)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  public getAll(): Observable<FullMusicItemDto> {
    return new Observable<FullMusicItemDto>(
      (observer) => {
        let url = this.musicItemsUrl;
        let evSource = new EventSource(url);
        evSource.onmessage = (event) => {
          console.debug('Received: ', event);
          const parsedJson = JSON.parse(event.data);
          const musicItem = new FullMusicItemDto(parsedJson['id'], parsedJson['name'],
          parsedJson['date'], parsedJson['lastModified'], parsedJson['shortDescription'],
          parsedJson['longDescription'], parsedJson['size'], parsedJson['instrument']);
          observer.next(musicItem);
        };
        evSource.onerror = error => {
          // readyStrate == 0: remote source closed connection
          if(evSource.readyState === 0) {
            console.log("Stream closed by server");
            evSource.close();
            observer.complete()
          }
          else {
            observer.error("Event Source error: " + error);
          }
        }
      }
    )
    
    this.http.get<FullMusicItemDto[]>('api' + this.musicItemsUrl)
    .pipe(
      retry (3),
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
