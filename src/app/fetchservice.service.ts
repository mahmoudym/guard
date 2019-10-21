import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from './games';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FetchserviceService {

  constructor(private http:HttpClient) { }
  getGames(): Observable<Game[]>{
    console.log("here")
    return this.http.get<Game[]>('https://stagingapi.gbarena.com/api/games');
  }
}
