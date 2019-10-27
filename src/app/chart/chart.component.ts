import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  public chartData: Object [];
  public primaryXAxis: Object;
  public primaryYAxis: Object;
  public legendSettings: Object;
  public columnMarker : Object;
  constructor() { }

  ngOnInit() {
    this.chartData = [
      { year:'2000', gold: 35, silver: 25 }, { year: '2001', gold: 28, silver: 20 },
      { year:'2002', gold: 34, silver: 21 }, { year: '2003', gold: 32, silver: 15 },
      { year:'2004', gold: 40, silver: 30 }
    ];
    this.primaryXAxis = { title: 'Year',valueType: 'Category' };
    this.primaryYAxis = {title:"value", minimum:0,maximum:50,interval:10};
    this.legendSettings = {visible : true};
    this.columnMarker = { dataLabel : { visible :true, position: 'Top'}};
  }

}
