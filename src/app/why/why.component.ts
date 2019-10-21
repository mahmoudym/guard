import { Component, OnInit } from '@angular/core';
import {FetchserviceService} from '../fetchservice.service'

@Component({
  selector: 'app-why',
  templateUrl: './why.component.html',
  styleUrls: ['./why.component.css']
})
export class WhyComponent implements OnInit {
  public games = [];
  constructor(private fetch:FetchserviceService) { }

  ngOnInit() {
    this.fetch.getGames()
      .subscribe(data=> console.log(data));
  }

}
