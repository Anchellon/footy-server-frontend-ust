import { Injectable } from '@angular/core';
import { Arena } from '../arena-view/arena';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArenaPostService {

  constructor(private http: HttpClient){
    
  }
  arenaPostUrl = "http://127.0.0.1:8000/arenas/"
  postArenaForm(arena:Arena):Observable<any>{
    return this.http.post(this.arenaPostUrl,arena)
    // return of(arena)
  }
}
