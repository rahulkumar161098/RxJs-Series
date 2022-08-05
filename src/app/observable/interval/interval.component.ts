import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { UtilitesService } from 'src/app/services/utilites.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {

  constructor( private _designPrint: UtilitesService) { }
  msg:any;
  videoSubscribe:any= Subscription;

  ngOnInit(): void {

    // const videoBrodcast= interval(2000);
    // timer(delay, interval)
    const videoBrodcast= timer(5000, 2000)
    this.videoSubscribe=videoBrodcast.subscribe(res=>{
      console.log(res);
      this.msg= 'video'+res
      this._designPrint.printVal(this.msg, 'user1');

      if(res>=5){
        this.videoSubscribe.unsubscribe()
      }
    })
  }
}

