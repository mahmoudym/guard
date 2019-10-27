import { Component, OnInit } from '@angular/core';
import {Game} from '../games'
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-why',
  templateUrl: './why.component.html',
  styleUrls: ['./why.component.css']
})
export class WhyComponent implements OnInit {
  public games:Game[] = [];
  public searchText: any;

  constructor(private _route: ActivatedRoute, private _router:Router) {
    this.games = this._route.snapshot.data['games'].data
  }

  ngOnInit() {
    if(this._route.snapshot.queryParamMap.has('searchText')){
      this.searchText = this._route.snapshot.queryParamMap.get('searchText')
    }

  }
  openGame(gameId:any){
    console.log(gameId)
    this._router.navigate(['/game',gameId],{
      queryParams:{'searchText': this.searchText}
    })
  }

}
