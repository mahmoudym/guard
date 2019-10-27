import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FetchserviceService} from '../fetchservice.service'
import {Game} from '../games'
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  public games:Game[];
  public id:any;
  public game:Game;
  constructor(private _route: ActivatedRoute, private _router:Router) {
    this.id = this._route.snapshot.params['id'];
    this.games = this._route.snapshot.data['games'].data
    this.game = this.games.find(e=> e.code ===this.id)
  }

  ngOnInit() {
    this._route.params.subscribe(params =>{
      if(params['id']){
        this.id = this._route.snapshot.params['id'];
        this.game = this.games.find(e=> e.code ===this.id)
      }
    })
  }
  onClick(){
    this._router.navigate(['/game','lol-tft'])
  }

}
