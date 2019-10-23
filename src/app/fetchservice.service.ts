import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Game } from './games';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FetchserviceService {
  public headers = new HttpHeaders();
  constructor(private http:HttpClient) { }
  getGames(): Observable<any>{
    console.log("here")
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin','*');
    return this.http.get('https://api.staging.gbarena.com/api/games', {headers: this.headers});
  }
}
