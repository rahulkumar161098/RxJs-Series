import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, map, take, takeLast, takeUntil, timer } from 'rxjs';
import { UtilitesService } from '../../services/utilites.service'

@Component({
  selector: 'app-take-operator',
  templateUrl: './take-operator.component.html',
  styleUrls: ['./take-operator.component.css']
})
export class TakeOperatorComponent implements OnInit {

  constructor( private _prt: UtilitesService) { }
  
  dataSource=['Rahul', 'Priyanka', 'Rupak', 'Rohit', 'Shayam']

  
 
  

  source:any= interval(1000)

  ngOnInit(): void {
    // take(4)
    const obs=from(this.dataSource)
    obs.pipe(
      take(4)
    ).subscribe((res: any)=>{
      console.log(res);
      this._prt.printVal(res, 'el')
      
    });

    // take last(3)
    obs.pipe(
      takeLast(3)
    ).subscribe((res: any)=>{
      console.log(res);
      this._prt.printVal(res, 'el2')
      
    });
    
    // take Until
    const condition1=timer(5000)
    const condition2= fromEvent(document,'click')
    this.source.pipe(
      map(res=> 'number ' +res),
      takeUntil(condition2)
    ).subscribe((res: any)=>{
      console.log(res);
      this._prt.printVal(res, 'el3')
      
    });

  }

  
  

}
