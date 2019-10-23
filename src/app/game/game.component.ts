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
  public game:Game;
  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    const id = this._route.snapshot.params['id'];
    this.game = this._route.snapshot.data['games'].data.find(e=> e.code ===id)
  }

}
