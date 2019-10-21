import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from './games';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FetchserviceService {

  constructor(private http:HttpClient) { }
  getGames(): Observable<any>{
    console.log("here")
    return this.http.get('https://stagingapi.gbarena.com/api/games');
  }
}
