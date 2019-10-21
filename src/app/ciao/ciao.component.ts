import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
@Component({
  selector: 'app-ciao',
  templateUrl: './ciao.component.html',
  styleUrls: ['./ciao.component.css']
})
export class CiaoComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
  }
}
