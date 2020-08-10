import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Pitch } from './pitch'
import {tap,catchError} from "rxjs/operators"


@Injectable({
  providedIn: 'root'
})
export class PitchService {
  
  constructor(private http:HttpClient) { 

  }
  pitchList :Pitch;
  _pitchUrl_base: string = "http://127.0.0.1:8000/arenas/"

  getPitchs(arena_id:string): Observable<Pitch[]>{
    let pitch_Url = this._pitchUrl_base + arena_id.toString()[2] + "/pitches"
    return this.http.get<Pitch[]>(pitch_Url).pipe(
    tap(data => console.log("All" + JSON.stringify(data))),
    catchError(this.handleError)
    )

  }
  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }  
}
