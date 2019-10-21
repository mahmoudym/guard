import { Injectable } from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import {FetchserviceService} from '../fetchservice.service'
import {Game} from '../games'
@Injectable({
  providedIn: 'root'
})
export class CrisisDetailResolverService implements Resolve<Game[]> {
constructor(private fetch:FetchserviceService) { }
resolve(route:ActivatedRouteSnapshot, state:RouterStateSnapshot): Observable<Game[]>|Promise<Game[]>|Game[]{
  return this.fetch.getGames();
}

}
