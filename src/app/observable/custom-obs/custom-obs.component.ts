import { Component, OnInit } from '@angular/core';
import { Observable, Observer, } from 'rxjs';

@Component({
  selector: 'app-custom-obs',
  templateUrl: './custom-obs.component.html',
  styleUrls: ['./custom-obs.component.css']
})
export class CustomObsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const custonObs= new Observable((observer: Observer<any>) => {
      observer.next(observer);
      observer.complete();
  });

  const obs=Observable.create(observer => {
    observer.next('data emit');
    // observer.error();
    // observer.complete();
  });
  

  obs.subscribe(res=>{
    console.log(res);
    
    
  })

  }

}


