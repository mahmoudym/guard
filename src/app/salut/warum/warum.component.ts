import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-warum',
  templateUrl: './warum.component.html',
  styleUrls: ['./warum.component.css']
})
export class WarumComponent implements OnInit {
  btnStyle = false;
  btnStyle2 = 'btn-def'
  constructor() {
    var observable = Observable.create((observer:any)=>{
      try{
        observer.next('hey')
        observer.next('how are you?')
        setInterval(()=>{
          observer.next('I am good')
        },2000)
    } catch(err){
      observer.error(err)
    }
    });
    var observer = observable.subscribe(
      (x:any) => console.log(x),
      (error:any) => console.log(error),
      () => console.log('Completed')
    );
    setTimeout(()=>{
      observer.unsubscribe();
    },6001)
  }

  ngOnInit() {
  }
  onClick(){
    this.btnStyle = true;
  }
  click(){
    this.btnStyle2 = 'btn-ch';
  }
}
