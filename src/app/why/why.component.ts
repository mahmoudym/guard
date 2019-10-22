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
  }

}
